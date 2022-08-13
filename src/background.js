// Set defaults values
chrome.runtime.onInstalled.addListener(() => {
   chrome.storage.sync.set(
      {
         feedSuggestions: true,
         feedStories: false,
         // feedWidth: 520,

         headerHome: true,
         headerMessages: true,
         headerPublish: true,
         headerExplore: true,
         headerLikes: false,
         headerProfile: false,

         postComments: true,
         postCommentWriting: true,
         postShareIcon: true,
         postLikesCount: false,
         postSideSection: true,
      },
      () => {}
   );
});
