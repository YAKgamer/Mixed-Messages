const feeling = ['happy', 'sad', 'annoyed', 'horny', 'needy', 'desperate', 'lustful', 'thirsty'];
const action = ['talk to your loved one', 'touch grass', 'relieve yourself', 'fuck your S.O', 'watch corn', 'video call your partner', 'take a nap', 'drink some holy water'];
const location = ['on the toilet seat', 'in the garden', 'on your bed', "on your lover's couch", 'in the kitchen', 'in front of the mirror', 'on the family T.V', 'in prison'];

function generateMessage() {
    const feelingIndex = Math.floor(Math.random() * feeling.length);
    const actionIndex = Math.floor(Math.random() * action.length);
    const locationIndex = Math.floor(Math.random() * location.length);

    return `You are feeling ${feeling[feelingIndex]}. You should ${action[actionIndex]} ${location[locationIndex]}.`;
}

console.log(generateMessage());