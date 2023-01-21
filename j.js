function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
let arr=["Why did the chicken cross the playground?<br>To get to the other slide!",
"Why did the actor fall through the floorboards?<br>They were going through a stage!",
"Why did a scarecrow win a Nobel prize?<br>He was outstanding in his field!","Why are peppers the best at archery?<br>Because they habanero!",
"What did the duck say after she bought chapstick?<br>Put it on my bill!","Why did an old man fall in a well?<br>Because he couldn’t see that well!",
"What do you call a fake noodle?<br>An impasta!","What did the three-legged dog say when he walked into a saloon?<br>“I’m looking for the man who shot my paw!",
"How do you tell the difference between a bull and a cow?<br>It is either one or the udder!","What’s red and smells like blue paint?<br>Red paint!",
"What’s the difference between a hippo and a Zippo?<br>One is very heavy, the other is a little lighter!",
"Why can’t you send a duck to space?<br>Because the bill would be astronomical!","What does Jeff Bezos do before he goes to sleep?<br>He puts his PJ-Amazon!"
,"What happened when the world's tongue-twister champion got arrested?<br>They gave him a tough sentence!",
"What did the mama cow say to the calf?<br>It’s pasture bedtime!","How does a vampire start a letter?<br>Tomb it may concern!",
"What do you call an illegally parked frog?<br>Toad!","What did one plate say to the other?<br>Dinner is on me!"
,"Why do hummingbirds hum?<br>Because they don’t know the words!","What do sprinters eat before a race?<br>Nothing. They fast!"];
let random_selection =getRandomItem(arr);
document.querySelector("#s2").innerHTML=random_selection;