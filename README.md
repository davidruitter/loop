# loop
## What is loop?
Loop is an app for Decentralized Async Video Messaging.

- 🎥 With one click you can take a loop which is a recording your camera and screen.
- 📨 You are than able to share the loop with anyone ranging from clients to students.
- 🗣 Recipients can give you direct feedback on your shared loops.
- 🔐 Data is only stored on your instance and you can manage access to your loops.

## I could also send a video over another app?
That's true. But in that case you would need multiple apps.</br>
Also you would need to find a way to record your screen which can be tidious

But the most important part. Getting Feedback this way is hard.</br>
Your recipients would have to cite the position of the video and you would have to go there again.

## Interested? Let's get started!
Clone the repository
```shell
git clone https://github.com/davidruitter/loop.git
```
Change into the directory
```shell
cd loop
```
Install the dependencies
```shell
npm install
```
Initialize the database
```shell
npx prisma db push
```
Run loop! You can visit it in your browser on https://localhost:3000
```shell
npm run dev
```
