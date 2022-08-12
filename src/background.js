// Set defaults values
chrome.runtime.onInstalled.addListener(() => {
   chrome.storage.sync.set(
      {
         feedSuggestions: true,
         feedStories: false,

         headerPublish: true,
         headerExplore: true,
         headerLikes: false,
         headerProfile: false,

         postComments: true,
         postShareIcon: true,
         postLikesCount: false,
      },
      () => {}
   );
});
