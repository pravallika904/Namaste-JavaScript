const numNeighbours = prompt('How many neighbour countries does your country have?');

if(numNeighbours === 2) {
    console.log('Only 2 border!');
}
else if(numNeighbours > 2) {
    console.log('More than 2 border');
}
else{
    console.log('No borders');
}