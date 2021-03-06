<template>
    <div
        class="vs-video"
        data-test="vs-video"
    >
        <div class="vs-video__iframe-wrapper">
            <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
            <youtube
                :video-id="videoId"
                :player-vars="playerVars"
                ref="youtube"
            />
        </div>
    </div>
</template>

<style lang="scss">
    .vs-video {
        &__iframe-wrapper {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
</style>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import VueYoutube from 'vue-youtube';
import Vue from 'vue';
import videoStore from '../../../stores/video.store';

Vue.use(VueYoutube, {
    global: false,
});

/**
 * This component embeds a YouTube video on to the page.
 *
 * It also uses the YouTube Player API so it can be controlled by
 * other components. It listens for a 'video-controls' event which
 * can be used to play or pause the video.
 *
 * It also calculates duration of a video for use in components.
 *
 * @displayName Video
 */

export default {
    name: 'VsVideo',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
        * The YouTube ID for the video
        */
        language: {
            type: String,
            default: 'en',
        },
        /**
        * The YouTube ID for the video
        */
        videoId: {
            type: String,
            required: true,
        },
        /**
         * A string to be shown with the rounded time, when the rounded
         * minute value is singular. Should contain '%s' to be replaced by the
         * number of minutes
         *
         * Eg: '%s minute video', 'Video de %s minuto'
         */
        singleMinuteDescriptor: {
            type: String,
            default: '%s minute video',
        },
        /**
         * A string to be shown with the rounded time, when the rounded
         * minute value is plural. Should contain '%s' to be replaced
         * by the number of minutes
         *
         * Eg: '%s minute video', 'Video de %s minutos'
         */
        pluralMinuteDescriptor: {
            type: String,
            default: '%s minute video',
        },
    },
    data() {
        return {
            duration: {
                minutes: 0,
                seconds: 0,
                roundedMinutes: '',
            },
            playerVars: {
                hl: this.language,
            },
        };
    },
    computed: {
        /**
         * Return the player instance
         */
        player() {
            return this.$refs.youtube.player;
        },
    },
    mounted() {
        /**
         * Upon promise resolution, if the video ID returns
         * a YouTube video, process the time into the desired format.
         */
        this.player.getDuration().then((response) => {
            this.formatTime(response);
            this.storeVideoDetails();
        });

        /**
         * Sets up listener for play/pause events
         * from $root
         */
        this.$root.$on('video-controls', (action, id, type) => {
            if (id === this.videoId) {
                if (action === 'play' && type === 'modal') {
                    // timeout allows for video in modal to appear
                    setTimeout(() => {
                        this.playVideo();
                    }, 1000);
                } else if (action === 'play') {
                    this.playVideo();
                } else if (action === 'pause') {
                    this.pauseVideo();
                }
            }
        });
    },
    methods: {
        /**
         * Plays the video
         */
        playVideo() {
            this.player.playVideo();
        },
        /**
         * Pauses the video
         */
        pauseVideo() {
            this.player.pauseVideo();
        },
        /**
         * Converts time in seconds to minutes and seconds,
         * returns an object.
         */
        formatTime(timeInSeconds) {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds - (minutes * 60);

            this.duration.minutes = minutes;
            this.duration.seconds = seconds;

            const roundedMinutes = this.getRoundedMinutes(minutes, seconds);

            this.duration.roundedMinutes = this.formatSingularOrPlural(roundedMinutes);
        },
        /**
         * Takes a time expressed as minutes and seconds and returns the number of minutes rounded
         * to the nearest one. Any time less than one minute is rounded up to one.
         */
        getRoundedMinutes(minutes, seconds) {
            if (seconds < 30 && minutes !== 0) {
                return minutes;
            }

            return minutes + 1;
        },
        /**
         * Checks if the number of (rounded) minutes the video is long is singular or plural, then
         * returns the appropriate descriptor string with the duration subbed in
         */
        formatSingularOrPlural(minutes) {
            if (minutes === 1) {
                return this.singleMinuteDescriptor.replace('%s', minutes);
            }

            return this.pluralMinuteDescriptor.replace('%s', minutes);
        },
        /**
         * Takes a number, returns a string padded with a
         * leading 0 if the number is less than 10
         */
        pad(toPad) {
            if (toPad >= 10) {
                return toPad;
            }

            return `0${toPad}`;
        },
        /**
         * Send video details to Vuex store
         */
        storeVideoDetails() {
            videoStore.dispatch('newVideoRef', {
                id: this.videoId,
                durationMsg: this.duration.roundedMinutes,
                duration: (this.duration.minutes * 60) + this.duration.seconds,
            });
        },
    },
};
</script>

<docs>
  ```jsx
    <VsContainer>
        <VsRow>
            <VsCol md="6">
                <VsVideo
                    video-id="c05sg3G4oA4"
                    language="es-es"
                />
            </VsCol>
            <VsCol md="6">
                <VsVideo
                    video-id="dKI8IEnqvbU"
                    single-minute-descriptor="Video de %s minuto"
                    plural-minute-descriptor="Video de %s minutos"
                    language="nl-nl"
                />
            </VsCol>
        </VsRow>
        <VsRow>
            <VsCol md="6">
                <VsButton
                    @click.native="$root.$emit('video-controls', 'play', 'c05sg3G4oA4')"
                    @keydown="$root.$emit('video-controls', 'play', 'c05sg3G4oA4')"
                >
                    Play
                </VsButton>
                <VsButton
                    @click.native="$root.$emit('video-controls', 'pause', 'c05sg3G4oA4')"
                    @keydown="$root.$emit('video-controls', 'pause', 'c05sg3G4oA4')"
                >
                    Pause
                </VsButton>
            </VsCol>
            <VsCol md="6">
                <VsButton
                    @click.native="$root.$emit('video-controls', 'play', 'dKI8IEnqvbU')"
                    @keydown="$root.$emit('video-controls', 'play', 'dKI8IEnqvbU')"
                >
                    Play
                </VsButton>

                <VsButton

                    @click.native="$root.$emit('video-controls', 'pause', 'dKI8IEnqvbU')"
                    @keydown="$root.$emit('video-controls', 'pause', 'dKI8IEnqvbU')"
                >
                    Pause
                </VsButton>
            </VsCol>
        </VsRow>
    </VsContainer>
  ```
</docs>
