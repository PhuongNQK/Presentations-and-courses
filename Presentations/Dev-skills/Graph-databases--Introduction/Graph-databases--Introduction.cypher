// Create a few nodes and relationships
CREATE (mary:PERSON {name: 'Mary'}),
	(john:PERSON {name: 'John'}),
	(sarah:PERSON {name: 'Sarah'}),
	(tom:PERSON {name: 'Tom'}),
	(mary)-[:KNOWS {howLong: 5}]->(john)-[:KNOWS]->(sarah)-[:KNOWS]->(tom),
	(john)-[:LIKES]->(sarah)
	RETURN mary, john, sarah, tom

// Add relationships if they do not exist
MATCH (sarah:PERSON {name: 'Sarah'}),
	(tom:PERSON {name: 'Tom'})
	MERGE (tom)-[r1:LIKES]->(sarah)<-[r2:KNOWS]-(tom)
	RETURN r1, r2
	
// Get all we have created so far
MATCH (n) RETURN n
	
// Update Mary's age to 18
MATCH (mary:PERSON {name: 'Mary'})
	SET mary.age = 18
	RETURN mary
	
// Add label STUDENT to Mary
MATCH (mary:PERSON {name: 'Mary'})
	SET mary:STUDENT
	RETURN mary
	
// Get the first 10 nodes in ascending order of names
MATCH (n) 
	RETURN n ORDER BY n.name LIMIT 10

// Find out who knows who directly
MATCH (a)-[:KNOWS]->(b)
	RETURN a.name + ' knows ' + b.name

// Find out who potentially knows who indirectly (via 1 person)
MATCH (a)-[:KNOWS]->(b)-[:KNOWS]->(c)
	RETURN a.name + ' potentially knows ' + c.name + ' via ' + b.name

MATCH (a)-[:KNOWS]->(b)-[:KNOWS]->(c)
	WHERE a.name <> c.name
	RETURN a.name + ' potentially knows ' + c.name + ' via ' + b.name
	
// Find out who potentially knows who indirectly (via any number of people)
MATCH p = (a)-[:KNOWS*]->(b)
	WITH a, b, length(p) AS viaCount
	WHERE a.name <> b.name AND viaCount > 1
	RETURN a.name + ' potentially knows ' + b.name + ' via ' + (viaCount-1) + ' people.'
		ORDER BY a.name

// Add GAY label to male people who like another male person
MATCH (a:PERSON)-[:LIKES]->(b:PERSON)
	WHERE a.male = true AND b.male = true
	SET a:GAY
	RETURN a.name + ' is gay.'	
		
// Delete everything - relationships then nodes
MATCH (n)-[r]->(m) DELETE r
MATCH (n) DELETE n

// Fun recap
CREATE (me:PRESENTER {name: 'phuong'})-[:THANK_YOU]->(reason:REASON {description: 'joining'}),
	(me)-[:WISH_YOU]->(:THING {name: 'A nice day'}),
	(me)-[:WISH_YOU]->(:ACTION {name: 'Enjoy'})
RETURN 'Until next time'