TypeScript Cypress Route Match Request Data Demo
================================================

Cypress的功能比较弱，在mock response的时候，只能简单的比较url和method，拿不到request的其它信息来决定返回哪个response

在某些场景下，我们需要根据request提供的某些参数来返回不同的response，来验证逻辑，目前还是实现不了。

https://github.com/cypress-io/cypress/issues/521

```
npm install
npm run test:open

npm run test:run
```
