FROM neo4j:3.2.6

ENV NEO4J_HOME=/var/lib/neo4j
ENV NEO4J_dbms_unmanaged__extension__classes=org.neo4j.graphql=/graphql
ADD neo4j-graphql-3.2.3.1-SNAPSHOT.jar $NEO4J_HOME/plugins/
ADD apoc-3.2.0.5-beta-all.jar $NEO4J_HOME/plugins/
