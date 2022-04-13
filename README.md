# ts-express
A demo CRUD project by ts/express
--
1. install nodejs: https://nodejs.org/en/
2. ```git clone git@github.com:quxiaozha/ts-express.git```
3. go to the project root director
4. ```npm install```
5. ```tsc```
6. ```npm start```
7. use postman to test the api

| API | Method | Request Body | Response|
|----|-----|----|----|
|localhost:3000/todos/|post|{"text": "Learn TS."}|{"message": "Create the todo","createdTodo": {"id": "0.22559186923384456","text": "Learn TS."}}|
|localhost:300/todos/|get|NA|{"todos":[{"id":"0.22559186923384456","text":"Learn TS."},{"id":"0.17118482909730703","text":"Create a new todo2."}]}
|localhost:300/todos/{id}|patch|{"text": "Learn test knowledge."}|{"updatedTodo":{"id":"0.17118482909730703","text":"Learn test knowledge."}}
|localhost:300/todos/{id}|delete|NA|{"message":"Todo deleted"}
