const feeling = ['happy', 'sad', 'annoyed', 'horny', 'needy', 'desperate', 'lustful', 'thirsty'];
const action = ['talk to your loved one', 'touch grass', 'relieve yourself', 'fuck your S.O', 'watch corn', 'video call your partner', 'take a nap', 'drink some holy water'];
const location = ['on the toilet seat', 'in the garden', 'on your bed', "on your lover's couch", 'in the kitchen', 'in front of the mirror', 'on the family T.V', 'in prison'];

function generateMessage() {
    const message = [];
    for (let i=1; i <= 3; i++) {
        message.push((Math.floor(Math.random()*7)+1));
    }
    return `You are feeling ${feeling[message[0]]}. You should ${action[message[1]]} ${location[message[2]].}`;
}

console.log(generateMessage());
