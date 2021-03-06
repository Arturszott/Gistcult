## Day 0
Dear diary, I've spent some time looking for the place to start. I must say that those react starters are great, but a little to complicated. Working on the established stack is way easier and allows to focus on more on quality of the particular features.

I've finally found the one that seems to be fine.

New things to learn:
- Redux, kinda different than Fluxible
- React Router, similar but different
- Github auth, it seems I'm the busy developer they mention there: https://gist.github.com/technoweenie/419219

Final thoughts of the day: The test runner needs to be changed, right now there is no much use of it. Redux is not that complicated. React Router works way different than the one I know.

## Day 1
Dear diary, I've managed to create a new site that is available for the github auth api. Placing 127.0.0.1 as my app url works well enough for github to register an app. I've displayed the data that comes from the url. Let's call it a success.

## Day 2
Dear diary, I've got it finally right. I have a feeling that I don't follow redux principles like it should be done. I've succeeded with forcing react-router to do some actions and save the results in the store. Finally having the setup right I can focus more on it's stability. Had some problems with CORS but chrome [plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) saved the day. This saved me some time from moving all the calls to the node layer. I still have no idea where to import the app config, but there are more important things to do.


## Day 3
Dear diary, I've been very disappointed about karma behaviour, so I had to get rid of it. Mocha does the job. I've finally have the setup that works. Today I've learned that there is a big difference between client_Id and clientId. I was knocking to nock but I've missed the right door. It seems that `nock.recorder.rec` is useful. I must be doing something wrong with redux actions, because it returns function that returns function that returns function that returns promise. It must be simpler. I feel sorry for all the people who are starting Redux withoit proper guidance.

By finally integrating react-bootstrap I proceed to visualize some received data from github. It would be probably a good idea to split connecting the container from the page component afterwards to facilitate page component testing. I totally want to move authentication verification to some pre-route loading moment, but due to time capacity, rendering different components in one page must be enough. I should also definitely save the current access token. This page reloading is annoying.

## Day 4
 Dear diary, finally access token is saved in localstorage. I had to extract some actions and provide them to the fetching one via dependency injections. Now it's all nice and testable. Testing connected component wasn't hard so far.

 Imagine how surprised I were when I realized that there is no error in react-router if you provide `undefined` component.

 After a few hours I'm now sure that I made a huge mistake by not designing redux state. Probably watching the rest 20 lessons of Redux on egghead would be a better idea. Cutting the corners was the result of the though that I won't be able to ship as much of the app as I wanted to. Untested parts of the app are slapping me in the face hard. I have couple ideas for refactorings though, so it's not that bad.

#Day 5
Dear diary trying out the multimethod library has not simplified reducers, only added another layer of complexity.

#Day 6
Dear diary, it's been a while since last coding. I've increased my knowledge about redux app architecture and good patterns by watching Learn Redux series and next part of Dan Abramov video tutorials. Async calls look better right now however I still feel that there is a field for improvement. I've flattened the state so now there is only one source of truth about the data in the app. My next bet is to read some serious stuff on redux testing. Developing without the safe test coverage is still slowing me down, however I consider that I'm still in the deep learning phase.
