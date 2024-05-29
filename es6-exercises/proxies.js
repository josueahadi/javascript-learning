/* GET TRAP */
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
//console.log(agent.status); // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)


/* Accessing the target object from inside the proxy */
const aimable = {status: 'looking for an intership'};

const handler2 = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    }
};

const agent2 = new Proxy(aimable, handler2);
//console.log(agent2.status);// (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status


/* Having the proxy return info directly */

const kiki = {status: 'working hard'};
const handler3 = {
    get(target, propName) {
        return `She's following many leads, so you should offer a contract as soon as possible!`;
    }
};

const agent3 = new Proxy(kiki, handler3);
console.log(agent3.status);



/* SET TRAP */ 
const josh = {status: 'looking for work'};
const handler4 = {
    set(target, propName, value) {
        if (propName === 'payRate') {  // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};

const agent4 = new Proxy(josh, handler4);
agent4.payRate = 1000;  // sets josh's pay to $1,000
console.log(agent4.payRate); // $850 as the actual pay after 15% commision