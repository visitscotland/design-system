<template>
    <div
        class="vs-rich-text-wrapper"
        :class="[
            `vs-rich-text-wrapper--variant-${variant}`,
            {
                lead: variant === 'lead',
            },
        ]"
    >
        <slot />
    </div>
</template>

<script>
/**
  * Text Wrapper is used to wrap and render HTML or text strings from
  * WYSIWYG editors or others and apply styles when needed.
 *
 * @displayName Rich Text Wrapper
 */
export default {
    name: 'VsRichTextWrapper',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * The font size used by the wrapper
         * `normal | lead`
         */
        variant: {
            type: String,
            default: 'normal',
            validator: (value) => value.match(/(normal|lead)/),
        },
    },
};
</script>

<style lang="scss">
.vs-rich-text-wrapper {
    &--variant-normal{
        font-family: $font-family-base;
        font-size: $body-font-size;

        @include media-breakpoint-up(md) {
            font-size: $body-font-size-md;
        }
    }

    &--variant-lead {
        line-height: $line-height-lead;
        font-size: $lead-font-size;

        @include media-breakpoint-up(md) {
            font-size: $lead-font-size-md;
        }
    }
}

</style>

<docs>
```jsx
    <BsWrapper class="mb-9">
        <h3>Normal Variant</h3>
        <VsRichTextWrapper>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
             <VsLink href="#foo">eget</VsLink> ante urna.<br/> Pellentesque aliquam faucibus
             enim fermentum fringilla. Vivamus ultrices dictum justo ac porta.
            Quisque mattis <b>tortor</b> dapibus tellus aliquet, finibus lacinia felis pulvinar.</p>
        </VsRichTextWrapper>
    </BsWrapper>

    <BsWrapper class="mb-4">
        <h3>Lead Variant</h3>
        <VsRichTextWrapper variant="lead">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
             <VsLink href="#foo">eget</VsLink> ante urna.<br/> Pellentesque aliquam faucibus
              enim fermentum fringilla. Vivamus ultrices dictum justo ac porta.
            Quisque mattis <b>tortor</b> dapibus tellus aliquet, finibus lacinia felis pulvinar.</p>
        </VsRichTextWrapper>
    </BsWrapper>

    <VsRichTextWrapper>
        <VsHeading level="3">
            How do I climb Ben Nevis safely?
        </VsHeading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            <VsLink href="#foo">eget</VsLink> ante urna.<br/> Pellentesque aliquam faucibus
            enim fermentum fringilla. Vivamus ultrices dictum justo ac porta.
        Quisque mattis <b>tortor</b> dapibus tellus aliquet, finibus lacinia felis pulvinar.
    </VsRichTextWrapper>
```
</docs>
