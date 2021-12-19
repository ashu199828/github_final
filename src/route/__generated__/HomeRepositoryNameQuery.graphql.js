/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeRepositoryNameQueryVariables = {|
  usr: string
|};
export type HomeRepositoryNameQueryResponse = {|
  +user: ?{|
    +repositories: {|
      +nodes: ?$ReadOnlyArray<?{|
        +name: string,
        +description: ?string,
        +collaborators: ?{|
          +nodes: ?$ReadOnlyArray<?{|
            +name: ?string
          |}>
        |},
        +issues: {|
          +nodes: ?$ReadOnlyArray<?{|
            +__typename: string
          |}>
        |},
        +createdAt: any,
        +url: any,
      |}>
    |}
  |}
|};
export type HomeRepositoryNameQuery = {|
  variables: HomeRepositoryNameQueryVariables,
  response: HomeRepositoryNameQueryResponse,
|};
*/


/*
query HomeRepositoryNameQuery(
  $usr: String!
) {
  user(login: $usr) {
    repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        name
        description
        collaborators(first: 10) {
          nodes {
            name
            id
          }
        }
        issues(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            __typename
            id
          }
        }
        createdAt
        url
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "usr"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "usr"
  }
],
v2 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v7 = [
  (v6/*: any*/)
],
v8 = [
  (v6/*: any*/),
  (v2/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "concreteType": "RepositoryCollaboratorConnection",
                    "kind": "LinkedField",
                    "name": "collaborators",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "collaborators(first:10)"
                  },
                  {
                    "alias": null,
                    "args": (v8/*: any*/),
                    "concreteType": "IssueConnection",
                    "kind": "LinkedField",
                    "name": "issues",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Issue",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "issues(first:10,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                  },
                  (v10/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "concreteType": "RepositoryCollaboratorConnection",
                    "kind": "LinkedField",
                    "name": "collaborators",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "collaborators(first:10)"
                  },
                  {
                    "alias": null,
                    "args": (v8/*: any*/),
                    "concreteType": "IssueConnection",
                    "kind": "LinkedField",
                    "name": "issues",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Issue",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v9/*: any*/),
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "issues(first:10,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                  },
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
          },
          (v12/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b258f42d69128e61871bd13f8cad28f2",
    "id": null,
    "metadata": {},
    "name": "HomeRepositoryNameQuery",
    "operationKind": "query",
    "text": "query HomeRepositoryNameQuery(\n  $usr: String!\n) {\n  user(login: $usr) {\n    repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {\n      nodes {\n        name\n        description\n        collaborators(first: 10) {\n          nodes {\n            name\n            id\n          }\n        }\n        issues(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {\n          nodes {\n            __typename\n            id\n          }\n        }\n        createdAt\n        url\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4eefc8a216225692fcb60765fe4c6b4c';

module.exports = node;
