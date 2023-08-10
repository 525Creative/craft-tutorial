import tippy from 'tippy.js';

window.addEventListener('DOMContentLoaded', function () {
  tippy('[data-tippy-content]', {
    allowHTML: true
  });

  var eye = document.querySelectorAll('.js-spot-eye');

  if (eye.length > 0) {
    // Make eyeballs follow cursor
    document.body.addEventListener('mousemove', function (event) {
      eye.forEach(function (item) {
        var x = item.getBoundingClientRect().left + item.clientWidth / 2;
        var y = item.getBoundingClientRect().top + item.clientHeight / 2;
        var rad = Math.atan2(event.pageX - x, event.pageY - y);
        var rot = rad * (180 / Math.PI) * -1 + 180;
        item.style.transform = 'rotate(' + rot + 'deg)';
      });
    });
  }

  /* Audio Player */

  const audioPlayer = document.querySelector('.js-audio-player');

  if (audioPlayer) {
    let audioState = 'play';
    let raf = null;
    const audio = document.querySelector('audio');
    const durationContainer = document.querySelector('.js-audio-player-time');
    const currentTimeContainer = document.querySelector(
      '.js-audio-current-time'
    );
    const seekSlider = document.querySelector('.js-audio-seeker');
    const playButton = document.querySelector('.js-play');
    const pauseClass = 'audio-player_control--pause';

    const whilePlaying = () => {
      seekSlider.value = Math.floor(audio.currentTime);
      currentTimeContainer.textContent = calculateTime(seekSlider.value);
      audioPlayer.style.setProperty(
        '--seek-before-width',
        (seekSlider.value / seekSlider.max) * 100 - 2 + '%'
      );
      raf = requestAnimationFrame(whilePlaying);
    };

    const showRangeProgress = rangeInput => {
      if (rangeInput === seekSlider) {
        audioPlayer.style.setProperty(
          '--seek-before-width',
          (rangeInput.value / rangeInput.max) * 100 - 2 + '%'
        );
      }
    };

    const calculateTime = secs => {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? '0' + seconds : seconds;
      return minutes + ':' + returnedSeconds;
    };

    const displayDuration = () => {
      durationContainer.textContent = calculateTime(audio.duration);
    };

    const setSliderMax = () => {
      seekSlider.max = Math.floor(audio.duration);
    };

    if (audio.readyState > 0) {
      displayDuration();
      setSliderMax();
    } else {
      audio.addEventListener('loadedmetadata', () => {
        displayDuration();
        setSliderMax();
      });
    }

    playButton.addEventListener('click', () => {
      if (audioState === 'play') {
        audio.play();
        requestAnimationFrame(whilePlaying);
        playButton.classList.add(pauseClass);
        audioState = 'pause';
      } else {
        audio.pause();
        cancelAnimationFrame(raf);
        playButton.classList.remove(pauseClass);
        audioState = 'play';
      }
    });

    seekSlider.addEventListener('input', e => {
      showRangeProgress(e.target);
      currentTimeContainer.textContent = calculateTime(seekSlider.value);
      if (!audio.paused) {
        cancelAnimationFrame(raf);
      }
    });

    seekSlider.addEventListener('change', () => {
      audio.currentTime = seekSlider.value;
      if (!audio.paused) {
        requestAnimationFrame(whilePlaying);
      }
    });

    audio.addEventListener('ended', () => {
      this.stop();
      cancelAnimationFrame(raf);
      playButton.classList.remove(pauseClass);
      audioState = 'play';
    });
  }
});
