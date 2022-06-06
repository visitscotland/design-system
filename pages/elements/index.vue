<template>
    <div>
        Elements Patterns are more complex components in the design system which are made up of
        multiple elements. An Accordion or Article are good examples.
        <Canvas>
            <h2>Some here</h2>
            <VsAddress>
                <span>Edinburgh Castle,</span>
                <span>Castle Hill,</span>
                <span>Edinburgh,</span>
                <span>City of Edinburgh,</span>
                <span>EH1 2NG</span>
            </VsAddress>
        </Canvas>
    </div>
</template>
<script>
import { configure, getStorybook, setAddon } from '@storybook/vue';
import VsAddress from '../components/VsAddress.vue';
import { Canvas } from '@storybook/addon-docs';

// import VsAddress from ~/components/elements/address/Address.vue

export default {
    components: {
        VsAddress,
        Canvas,
    },
};
</script>
