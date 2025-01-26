//  <a href=" https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hi%20i%20am%20subject&to=services.epiccreation@gmail.com&body=This%20is%20the%20body%0D%0Ahi this is new line"target="_blank">Write Us</a>

function Email_Sender() {
  var Subject = document.getElementById('Subject').value
  var Body = document.getElementById('Body').value
  var Send_Button = document.getElementById('Send_Button')

  var NoSpace = Subject.replace(/%/g, '%25')
    .replace(/&/g, '%26')
    .replace(/\+/g, '%2B')
    .replace(/[#]/g, '%23')
    .replace(/ /g, '%20')

  var LineBreak = Body.replace(/%/g, '%25')
    .replace(/&/g, '%26')
    .replace(/\+/g, '%2B')
    .replace(/[#]/g, '%23')
    .replace(/ /g, '%20')
    .replace(/(?:\r|\n|\r\n)/g, '%0D%0A')

  var finalurl =
    'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=' +
    NoSpace +
    '&to=services.epiccreation@gmail.com&body=' +
    LineBreak

  Send_Button.href = finalurl
}



document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll("img.lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

