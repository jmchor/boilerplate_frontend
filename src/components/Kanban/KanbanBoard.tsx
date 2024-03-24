import { DndContext, rectIntersection, PointerSensor, useSensor, useSensors, MouseSensor } from '@dnd-kit/core';
import KanbanLane from './KanbanLane';
import AddCard from './AddCard';
import { useEffect, useState } from 'react';
import { Cards } from '../../types/Cards';
import { graphql } from 'gql.tada';
import { useMutation, useQuery } from '@apollo/client';
import { flushSync } from 'react-dom';
import { Container, LaneContainer } from '../../styles/KanbanStyles.js';

const UPDATE_KANBAN_MUTATION = graphql(`
	mutation EditKanban(
		$id: ID!
		$backlog: [KanbanCardInput]
		$todo: [KanbanCardInput]
		$doing: [KanbanCardInput]
		$done: [KanbanCardInput]
	) {
		editKanban(_id: $id, backlog: $backlog, todo: $todo, doing: $doing, done: $done) {
			backlog {
				title
			}
			doing {
				title
			}
			done {
				title
			}
			todo {
				title
			}
			_id
		}
	}
`);

const FIND_KANBAN = graphql(`
	query FindKanban($id: ID) {
		findKanban(_id: $id) {
			backlog {
				title
			}
			todo {
				title
			}
			doing {
				title
			}
			done {
				title
			}
		}
	}
`);

interface KanbanCard {
	__typename: string;
	title: string;
	// Add other properties as needed
}

const KanbanBoard = ({ kanbanId }: { kanbanId: string }) => {
	const { data, loading } = useQuery(FIND_KANBAN, {
		variables: {
			id: kanbanId,
		},
		skip: !kanbanId,
		fetchPolicy: 'no-cache',
		onError: (error) => {
			// Handle error
			console.error('Query error:', error);
		},
		onCompleted: (data) => {
			console.log('Query completed:', data);

			flushSync(() => {
				setTodoItems(data?.findKanban?.todo);
				setDoneItems(data?.findKanban?.done);
				setInProgressItems(data?.findKanban?.doing);
				setuItems(data?.findKanban?.backlog);
				setQueryDone(true);
			});
		},
	});

	const [todoItems, setTodoItems] = useState<Array<Cards | null>>([]);
	const [doneItems, setDoneItems] = useState<Array<Cards | null>>([]);
	const [inProgressItems, setInProgressItems] = useState<Array<Cards | null>>([]);
	const [uItems, setuItems] = useState<Array<Cards | null>>([]);
	const [queryDone, setQueryDone] = useState(false);
	const addNewCard = (title: string) => {
		// Check if the title already exists in any of the other state arrays
		const titleExists =
			todoItems.some((item) => item?.title === title) ||
			doneItems.some((item) => item?.title === title) ||
			inProgressItems.some((item) => item?.title === title);

		// If the title doesn't exist in any other array, add it to the `uItems` array
		if (!titleExists) {
			setuItems([...uItems, { title }]);
		} else {
			// Handle case where title already exists
			console.log('Title already exists in another list.');
			// Optionally, you can show a message to the user or perform some other action
		}
	};

	function removeTypename(objects: KanbanCard[]): Omit<KanbanCard, '__typename'>[] {
		return objects.map(({ __typename, ...rest }) => rest);
	}

	const [updateKanban] = useMutation(UPDATE_KANBAN_MUTATION, {
		variables: {
			id: kanbanId,
			backlog: removeTypename(uItems),
			todo: removeTypename(todoItems),
			doing: removeTypename(inProgressItems),
			done: removeTypename(doneItems),
		},

		fetchPolicy: 'no-cache',

		onError: (error) => {
			// Handle error
			console.error('Mutation error:', error);
		},
		onCompleted: (data) => {
			console.log('Mutation completed:', data);
		},
		refetchQueries: ['FindKanban'],
	});

	useEffect(() => {
		if (queryDone) {
			updateKanban();
		}
	}, [uItems, todoItems, inProgressItems, doneItems]);

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				delay: 150,
				abortTouchDelay: 1000,
			},
		}),
		useSensor(MouseSensor, {
			activationConstraint: {
				delay: 150,
				abortTouchDelay: 1000,
			},
		})
	);

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={rectIntersection}
			onDragEnd={(e) => {
				const container = e.over?.id;
				const title = e.active.data.current?.title ?? '';
				const index = e.active.data.current?.index ?? 0;
				const parent = e.active.data.current?.parent ?? 'To Do';
				if (container === 'To Do') {
					setTodoItems([...todoItems, { title }]);
				} else if (container === 'Done') {
					setDoneItems([...doneItems, { title }]);
				} else if (container === 'Backlog') {
					setuItems([...uItems, { title }]);
				} else {
					setInProgressItems([...inProgressItems, { title }]);
				}
				if (parent === 'To Do') {
					setTodoItems([...todoItems.slice(0, index), ...todoItems.slice(index + 1)]);
				} else if (parent === 'Done') {
					setDoneItems([...doneItems.slice(0, index), ...doneItems.slice(index + 1)]);
				} else if (parent === 'Backlog') {
					setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
				} else {
					setInProgressItems([...inProgressItems.slice(0, index), ...inProgressItems.slice(index + 1)]);
				}
			}}
		>
			<Container className='Kanbancontainer'>
				<AddCard addCard={addNewCard} />
				<LaneContainer className='lane'>
					<KanbanLane title='Backlog' items={uItems} />
					<KanbanLane title='To Do' items={todoItems} />
					<KanbanLane title='In Progress' items={inProgressItems} />
					<KanbanLane title='Done' items={doneItems} />
				</LaneContainer>
			</Container>
		</DndContext>
	);
};

export default KanbanBoard;
