/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "SCALAR",
        "name": "Date"
      },
      {
        "kind": "ENUM",
        "name": "ModuleType",
        "enumValues": [
          {
            "name": "commonjs"
          },
          {
            "name": "module"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "FrontFrame",
        "enumValues": [
          {
            "name": "reactts"
          },
          {
            "name": "reactjs"
          },
          {
            "name": "vanillajs"
          },
          {
            "name": "nextjs"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "BackendEnv",
        "enumValues": [
          {
            "name": "nodets"
          },
          {
            "name": "nodejs"
          },
          {
            "name": "nodeExpressTS"
          },
          {
            "name": "nodeExpressJS"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "Database",
        "enumValues": [
          {
            "name": "mongodb"
          },
          {
            "name": "postgres"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "CMS",
        "enumValues": [
          {
            "name": "keystoneJS"
          },
          {
            "name": "strapi"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "Packages",
        "enumValues": [
          {
            "name": "jsonwebtoken"
          },
          {
            "name": "express"
          },
          {
            "name": "cors"
          },
          {
            "name": "bcryptjs"
          },
          {
            "name": "bcryptts"
          },
          {
            "name": "tsx"
          },
          {
            "name": "dotenv"
          },
          {
            "name": "graphql_codegen_cli"
          },
          {
            "name": "graphql_codegen_typescript"
          },
          {
            "name": "graphql_codegen_typescript_resolvers"
          },
          {
            "name": "nodemon"
          },
          {
            "name": "tsup"
          },
          {
            "name": "apolloClient"
          },
          {
            "name": "graphql"
          },
          {
            "name": "typescript"
          },
          {
            "name": "typesNode"
          },
          {
            "name": "mongoose"
          },
          {
            "name": "pg"
          },
          {
            "name": "apolloServer"
          },
          {
            "name": "graphqlTag"
          },
          {
            "name": "typesJsonwebtoken"
          },
          {
            "name": "typesBcryptjs"
          },
          {
            "name": "typesCors"
          },
          {
            "name": "typesNodemon"
          },
          {
            "name": "typesPg"
          },
          {
            "name": "typesExpress"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "Tags",
        "enumValues": [
          {
            "name": "database"
          },
          {
            "name": "backend"
          },
          {
            "name": "frontend"
          },
          {
            "name": "wordpress"
          },
          {
            "name": "keystone"
          },
          {
            "name": "technical_writing"
          },
          {
            "name": "blog"
          },
          {
            "name": "graphql"
          },
          {
            "name": "validation"
          },
          {
            "name": "tests"
          },
          {
            "name": "no_sql"
          },
          {
            "name": "sql"
          },
          {
            "name": "misc"
          },
          {
            "name": "react"
          },
          {
            "name": "typescript"
          },
          {
            "name": "programming"
          },
          {
            "name": "software_engineering"
          },
          {
            "name": "wiki"
          },
          {
            "name": "deployment"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "passwordHash",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "projects",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "articles",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "likedArticles",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "OBJECT",
        "name": "Article",
        "fields": [
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "subheadline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "tags",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "ENUM",
                "name": "Tags",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "imageUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "externalLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "linkedProjects",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "KanbanCard",
        "fields": [
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Kanban",
        "fields": [
          {
            "name": "backlog",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "KanbanCard",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "todo",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "KanbanCard",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "doing",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "KanbanCard",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "done",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "KanbanCard",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "project",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Project",
        "fields": [
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "frontend",
            "type": {
              "kind": "OBJECT",
              "name": "FrontendConfig",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "backend",
            "type": {
              "kind": "OBJECT",
              "name": "BackendConfig",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "installScripts",
            "type": {
              "kind": "OBJECT",
              "name": "InstallScripts",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "kanban",
            "type": {
              "kind": "OBJECT",
              "name": "Kanban",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "articles",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "tags",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FrontendConfig",
        "fields": [
          {
            "name": "framework",
            "type": {
              "kind": "ENUM",
              "name": "FrontFrame",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "gqlClient",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "packages",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "ENUM",
                "name": "Packages",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "OBJECT",
        "name": "BackendConfig",
        "fields": [
          {
            "name": "environment",
            "type": {
              "kind": "ENUM",
              "name": "BackendEnv",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "moduleType",
            "type": {
              "kind": "ENUM",
              "name": "ModuleType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "gqlServer",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "cms",
            "type": {
              "kind": "ENUM",
              "name": "CMS",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "packages",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "ENUM",
                "name": "Packages",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "database",
            "type": {
              "kind": "ENUM",
              "name": "Database",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InstallScripts",
        "fields": [
          {
            "name": "frontend",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "backend",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FrontendConfigInput",
        "inputFields": [
          {
            "name": "framework",
            "type": {
              "kind": "ENUM",
              "name": "FrontFrame",
              "ofType": null
            }
          },
          {
            "name": "gqlClient",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "packages",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "ENUM",
                "name": "Packages",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BackendConfigInput",
        "inputFields": [
          {
            "name": "environment",
            "type": {
              "kind": "ENUM",
              "name": "BackendEnv",
              "ofType": null
            }
          },
          {
            "name": "moduleType",
            "type": {
              "kind": "ENUM",
              "name": "ModuleType",
              "ofType": null
            }
          },
          {
            "name": "gqlServer",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "cms",
            "type": {
              "kind": "ENUM",
              "name": "CMS",
              "ofType": null
            }
          },
          {
            "name": "packages",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "ENUM",
                "name": "Packages",
                "ofType": null
              }
            }
          },
          {
            "name": "database",
            "type": {
              "kind": "ENUM",
              "name": "Database",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InstallScriptsInput",
        "inputFields": [
          {
            "name": "frontend",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "backend",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ArticleInput",
        "inputFields": [
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subheadline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "tags",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "ENUM",
                "name": "Tags",
                "ofType": null
              }
            }
          },
          {
            "name": "imageUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "externalLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "linkedProjects",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "KanbanCardInput",
        "inputFields": [
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "KanbanInput",
        "inputFields": [
          {
            "name": "backlog",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "KanbanCardInput",
                "ofType": null
              }
            }
          },
          {
            "name": "todo",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "KanbanCardInput",
                "ofType": null
              }
            }
          },
          {
            "name": "doing",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "KanbanCardInput",
                "ofType": null
              }
            }
          },
          {
            "name": "done",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "KanbanCardInput",
                "ofType": null
              }
            }
          },
          {
            "name": "project",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LoginInput",
        "inputFields": [
          {
            "name": "input",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Token",
        "fields": [
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "isAuthenticated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LogoutResponse",
        "fields": [
          {
            "name": "loggedOut",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Authenticationstatus",
        "fields": [
          {
            "name": "cookieIsPresent",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "allProjects",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "searchProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "allArticles",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findArticle",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "currentUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "myProjects",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "checkAuthentication",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Authenticationstatus",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "findKanban",
            "type": {
              "kind": "OBJECT",
              "name": "Kanban",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "description",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "createdBy",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "frontend",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FrontendConfigInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "backend",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "BackendConfigInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "installScripts",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InstallScriptsInput",
                  "ofType": null
                }
              },
              {
                "name": "kanban",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "KanbanInput",
                  "ofType": null
                }
              },
              {
                "name": "articles",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ArticleInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "tags",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "addInstallScript",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "editProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "description",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "createdBy",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "tags",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteProject",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "createdBy",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteArticle",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "createdBy",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createKanban",
            "type": {
              "kind": "OBJECT",
              "name": "Kanban",
              "ofType": null
            },
            "args": [
              {
                "name": "backlog",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "KanbanCardInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "todo",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "KanbanCardInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "doing",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "KanbanCardInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "done",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "KanbanCardInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "project",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "createdBy",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteKanban",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "createdBy",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "editKanban",
            "type": {
              "kind": "OBJECT",
              "name": "Kanban",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "backlog",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "KanbanCardInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "todo",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "KanbanCardInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "doing",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "KanbanCardInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "done",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "KanbanCardInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteUser",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createArticle",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "subheadline",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "tags",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "Tags",
                    "ofType": null
                  }
                }
              },
              {
                "name": "imageUrl",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "externalLink",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "linkedProjects",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "createdBy",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "linkArticleToProject",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "projectId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "editArticle",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "text",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "subheadline",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "tags",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "Tags",
                    "ofType": null
                  }
                }
              },
              {
                "name": "imageUrl",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "externalLink",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "createdBy",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "image",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "editUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "username",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "email",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "image",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updatePassword",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "oldPassword",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "newPassword",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "login",
            "type": {
              "kind": "OBJECT",
              "name": "Token",
              "ofType": null
            },
            "args": [
              {
                "name": "credentials",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LoginInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "logout",
            "type": {
              "kind": "OBJECT",
              "name": "LogoutResponse",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}