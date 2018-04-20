import {neo4jgraphql} from 'neo4j-graphql-js';

export const schema = [
  `
type User {
    id: ID!
}

type RenderScale {
    id: ID!
    pixelWidth: Int
    pixelHeight: Int
    shape: String
}

type PointMap {
    scale: RenderScale @relation(name: "MAPPED_BY", direction: "IN")
    paintX: Int
    paintY: Int
    modelX: Float
    modelY: Float
}

type Term {
    value: String!
    usedIn: [Dictionary] @relation(name: "INCLUDES", direction: "IN")
}

type Dictionary {
    id: ID!
    owner: User @relation(name: "OWNED_BY", direction: "OUT")
    name: String
    terms: Term @relation(name: "INCLUDES", direction: "OUT")
}

type Gallery {
    id: ID!
    owner: User @relation(name: "OWNED_BY", direction: "OUT")
    name: String
    renderScale: RenderScale @relation(name: "RENDERS_AT", direction: "OUT")
    prefixTerms: Dictionary @relation(name: "GETS_PREFIXES_FROM", direction: "OUT")
    suffixTerms: Dictionary @relation(name: "GETS_SUFFIXES_FROM", direction: "OUT")
}

type PaintedPhrase {
    id: ID!
    owner: Gallery @relation(name: "OWNED_BY", direction: "OUT")
    prefix: Term @relation(name: "FROM_PREFIX", direction: "OUT")
    suffix: Term @relation(name: "FROM_SUFFIX", direction: "OUT")
    atScale: RenderScale @cypher(statement: "WITH {this} as this MATCH (this)-[:OWNED_BY]->()-[:RENDERS_AT]->(scale) RETURN scale")
    filePath: String
}

type MutationType {
   newUser(id:ID!) : ID! @cypher(statement:"MERGE (u:User {id:{id}}) RETURN u.id")
   newSquareScale(id:ID!, pixelLength:Int) : RenderScale @cypher(statement:"MERGE (s:RenderScale {id:{id}}) ON CREATE SET s += {pixelWidth:{pixelLength}, pixelHeight:{pixelLength}} RETURN s")
   newScale(id:ID!, pixelWidth:Int, pixelHeight:Int, fitOrFill:String) : RenderScale @cypher(statement:"MERGE (s:RenderScale {id:{id}}) ON CREATE SET s += {pixelWidth:{pixelWidth}, pixelHeight:{pixelHeight}, shape:{fitOrFill}} RETURN s")
   newDictionary(id:ID!, owner:ID, name: String) : Dictionary @cypher(statement:"MERGE (d:Dictionary {id:{id}}) ON CREATE SET d += {name:{name}} RETURN d")
   newGallery(id:ID!, owner:ID, name: String) : Gallery @cypher(statement:"MERGE (g:Gallery {id:{id}}) ON CREATE SET g += {name:{name}} RETURN g")
}

type QueryType {
   userByUserId(id:ID!) : User @cypher(statement:"MATCH (u:User {id:{id}}) RETURN u")
   dictionaryCount(userId:ID!) : Int @cypher(statement:"MATCH (d:Dictionary)-[:OWNED_BY]->(u:User{id:{userId}}) RETURN count(d)")
}

schema {
   query: QueryType
   mutation: MutationType
}
`
];

// newUser(id:ID!) : String @cypher(statement:"CREATE (u:User {id:{id}}) RETURN u.id")

export const resolvers = {
  QueryType: {
    userByUserId(object, params, ctx, resolveInfo) {
      return neo4jgraphql(object, params, ctx, resolveInfo);
    },
    dictionaryCount(object, params, ctx, resolveInfo) {
      return neo4jgraphql(object, params, ctx, resolveInfo);
    }
  },
    MutationType: {
      newUser(object, params, ctx, resolveInfo) {
        return neo4jgraphql(object, params, ctx, resolveInfo);
      },
      newScale(object, params, ctx, resolveInfo) {
        return neo4jgraphql(object, params, ctx, resolveInfo);
      },
      newSquareScale(object, params, ctx, resolveInfo) {
        return neo4jgraphql(object, params, ctx, resolveInfo);
      },
      newDictionary(object, params, ctx, resolveInfo) {
        return neo4jgraphql(object, params, ctx, resolveInfo);
      },
      newGallery(object, params, ctx, resolveInfo) {
        return neo4jgraphql(object, params, ctx, resolveInfo);
      }
    }
  };
