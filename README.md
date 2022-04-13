# ts-express
A demo CRUD project by ts/express
--
1. ```git clone git@github.com:quxiaozha/ts-express.git```
2. go to the project root director
3. ```npm install```
4. ```tsc```
5. ```npm start```
6. use postman to test the api

| API | Method | Request Body | Response|
|----|-----|----|----|
|localhost:3000/todos/|post|{"text": "Learn TS."}|{"message": "Create the todo","createdTodo": {"id": "0.22559186923384456","text": "Learn TS."}}|
|localhost:300/todos/|get|NA|{"todos":[{"id":"0.22559186923384456","text":"Learn TS."},{"id":"0.17118482909730703","text":"Create a new todo2."}]}
|localhost:300/todos/{id}|patch|{"text": "Learn test knowledge."}|{"updatedTodo":{"id":"0.17118482909730703","text":"Learn test knowledge."}}
|localhost:300/todos/{id}|delete|NA|{"message":"Todo deleted"}
