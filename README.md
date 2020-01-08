## Setup and Run ES6 code

Install dependency (babel > 7.x)
```
npm i -D @babel/node @babel/core @babel/preset-env
```

add .babelrc
```
{
    "presets": [
        "@babel/env"
    ]
}
```

Run 
```
  npx babel-node array_es6.js
  
  npm run test
```

## Creational Design Patterns

A creational design pattern basically solves a problem by controlling the creation process of an object.

### Constructor
### Factory
### Abstract-factory
### Prototype
### Singleton

## Structural Design Patterns
These patterns are concerned with class and object composition. They help structure or restructure one or more parts without affecting the entire system. 

### Adapter
### Composite
### Decorator
### Façade
### Flyweight
### Proxy

## Behavioral Design Patterns
These patterns are concerned with improving communication between dissimilar objects.

### Chain of Responsibility Pattern
### Command
### Iterator
### Mediator
### Observer
### State
### Strategy
### Template
