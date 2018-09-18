const shareDialogTitle = 'ShareWindow';
const shareDialogParameters = 'toolbar=0,status=0,width=626,height=436,resizable=yes';

const facebookShare = () => {
  console.log('...')
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, shareDialogTitle, shareDialogParameters);
};

const twitterShare = () => {
  window.open('http://twitter.com/share?url=' + window.location.href , shareDialogTitle, shareDialogParameters);
};

const pinterestShare = () => {
  window.open('http://pinterest.com/pin/create/button/?url=' + window.location.href, shareDialogTitle, shareDialogParameters);
};

export {
  facebookShare,
  twitterShare,
  pinterestShare
};