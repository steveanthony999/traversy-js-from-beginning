class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

// EventObserver.prototype = {
//   subscribe: function(fn) {
//     this.observers.push(fn);
//     console.log(`You are now subscribed to ${fn.name}`);
//   },
//   unsubscribe: function(fn) {
//     //   filter out from the list whatever matches the cb function if no
//     // match the cb gets to stay in list and filter returns new list and reassigns list of observers
//     this.observers = this.observers.filter(function(item) {
//       if (item !== fn) {
//         return item;
//       }
//     });
//     console.log(`You are now unsubscribed from ${fn.name}`);
//   },
//   fire: function() {
//     this.observers.forEach(function(item) {
//       item.call();
//     });
//   }
// };

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// CLick Handler
const getCurMilliseconds = function() {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function() {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
};
