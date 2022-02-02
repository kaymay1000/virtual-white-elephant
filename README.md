# Virtual White Elephant

## Please note: This project is currently in progress!

Don't get stuck with those ugly socks (nobody wants your re-gift, Karen!), or that mystery-flavored jam that's at _least_ a decade old... let Virtual White Elephant handle the logistics of hosting a virtual gift exchange, so all you have to do is kick back, relax, and watch your foolproof gift-swapping strategy unfold.

## Why I created Virtual White Elephant (VWE)
This project was born out of the C\*vid-19 pandemic. Something I love to do around the holidays, as do many folks, is participate in a gift exchange with friends or family. Enter: C19. Fear, frustration, plans derailed left and right... including holiday celebrations and traditions. 

This is what sparked the idea for VWE. I wanted to come up with a way for friends/families to manage the logisitcs of a gift exchange over Zoom, with the hope that it would help restore a tiny bit of normalcy to an utterly abnormal chapter of human history.

## Current Features
- Fully responsive web app.
- Ability to add player names.
- Maintains fairness by randomly assigning the order in which players will open a gift
- Ability to update a gift's current owner (please note: this feature still needs some logic improvements).

## Planned Features
- Ensure accessibility/A11Y compliance.
- Keep track of (and display to the user) how many times a gift has been stolen (max of 3 times, then it's frozen).
- Implement Redux to (hopefully) reduce excessive amounts of lifted state and prop drilling, particularly for the Exchange page and all of its child components.
- Ability to email a formatted list of the exchange results to whoever would like a copy.
- Potentially refactor/rewrite this project in React Native or Swift with the hope of publishing it to an app store or two.

## Gameplay

- Designate one participant to be the Host
- Each Participant places their gift in view of their webcam
- Each Participant "draws" a number at random
- Participant #1 chooses which gift they'd like to "open", and has the Participant who brought that gift unveil it on camera for all to see
- Participant #2 has two options: choose another gift to open, or steal Participant #1's gift
- If your gift is stolen, you may either choose a new gift to open or steal another gift
- A gift can only be stolen twice after its initial opening-- after two steals, the gift "dies" and remains with its third/final owner
- Gameplay continues sequentially until each Participant has gotten a chance to either open a new gift, or steal an existing one
