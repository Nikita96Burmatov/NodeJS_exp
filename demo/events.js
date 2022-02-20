import EventEmitter from "events";

// const emiter = new EventEmitter();

// emiter.on('anything', data => {
//     console.log('ON: anything', data)
// })

// emiter.emit('anything', {a: 1})
// emiter.emit('anything', {b: 2})


// setTimeout(() => {

// emiter.emit('anything', {c: 3})
// }, 1500)

class Dispatcher extends EventEmitter{
    subscribe(eventName, cb) {
        console.log('[Subscribe..]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching..]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()


dis.subscribe('aa', data => {
    console.log('On: aa', data)
})

dis.dispatch('aa', {aa:2})
