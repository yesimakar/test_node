<template>
  <DropZone ncBgType="bgColor" backgroundImage="" id="35112b35-7d42-4a65-be71-737e252f4c06" v-bind:style="{ width: '100%', height: 'auto' }">
    <WDangerButton
      tag="button"
      href=""
      v-bind:pill="false"
      size="md"
      text="Node"
      type="button"
      v-bind:block="false"
      color="#FFFFFF"
      theme="theme--light01"
      v-bind:squared="false"
      variant="danger"
      v-bind:isEnabled="true"
      background="#dc3545"
      linkTarget="_top"
      ncLinkType="link"
      borderColor="#dc3545"
      ncTypography="custom"
      v-bind:resetTrigger="false"
      ncTooltipText=""
      verticalWidth="60px"
      v-bind:nucalDataModel="{ type: 'NSW', isList: false, dynamic: false, structure: [{ type: 'string', propName: 'text', displayName: 'Value' }] }"
      verticalHeight="60px"
      horizontalWidth="72.4479px"
      toForRouterLink="to"
      horizontalHeight="37.5347px"
      ncClickFontColor="#FFFFFF"
      ncFocusFontColor="#FFFFFF"
      ncHoverFontColor="#FFFFFF"
      ncClickBorderColor="#dc3545"
      ncDisableFontColor="#FFFFFF"
      ncFocusBorderColor="#dc3545"
      ncHoverBorderColor="#dc3545"
      ncDisableBorderColor="transparent"
      ncClickBackgroundColor="#dc3545"
      ncFocusBackgroundColor="#dc3545"
      ncHoverBackgroundColor="#dc3545"
      ncDisableBackgroundColor="#969696"
      position="relative"
      v-bind:snapX="false"
      v-bind:snapY="false"
      id="d16efb7e-b9d9-42ab-b373-c8c74a975dcb"
      v-bind:style="{
        width: '100%',
        height: '100%',
        tabIndex: '0px',
        boxShadow: '',
        fontStyle: 'normal',
        marginTop: '0px',
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold,Open Sans',
        fontWeight: 'bold',
        lineHeight: '1.4',
        marginLeft: '0px',
        paddingTop: '',
        textShadow: '',
        visibility: 'visible',
        borderStyle: 'solid',
        marginRight: '0px',
        paddingLeft: '',
        marginBottom: '0px',
        paddingRight: '',
        paddingBottom: '',
        borderTopWidth: '1px',
        textDecoration: 'none',
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        horizontalHeight: '37.5347px',
        borderBottomWidth: '1px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        zIndex: 2,
      }"
    />
  </DropZone>
</template>
<script>
export default {
  name: 'Screen1',
  data() {
    return {};
  },
  props: {},
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
@media (min-width: 1024.05px) {
  [id='35112b35-7d42-4a65-be71-737e252f4c06'] {
    display: grid;
    grid-template-columns: 41.171875rem 16.328125rem 42.5rem;
    grid-template-rows: minmax(24.0625rem, max-content) minmax(7.03125rem, max-content) minmax(31.171875rem, max-content);
  }
  [id='d16efb7e-b9d9-42ab-b373-c8c74a975dcb'] {
    grid-area: 2/2/3/3;
    font-size: Max(Min(18rem, 12px), 1.40625rem);
  }
}
@media (min-width: 768.05px) and (max-width: 1024px) {
  [id='35112b35-7d42-4a65-be71-737e252f4c06'] {
    display: grid;
    grid-template-columns: 39.794921875rem 20.41015625rem 39.794921875rem;
    grid-template-rows: minmax(30.078125rem, max-content) minmax(8.7890625rem, max-content) minmax(3.125rem, max-content);
  }
  [id='d16efb7e-b9d9-42ab-b373-c8c74a975dcb'] {
    grid-area: 2/2/3/3;
    font-size: Max(Min(18rem, 12px), 1.7578125rem);
  }
}
@media (min-width: 480.05px) and (max-width: 768px) {
  [id='35112b35-7d42-4a65-be71-737e252f4c06'] {
    display: grid;
    grid-template-columns: 36.393229166666664rem 27.213541666666668rem 36.393229166666664rem;
    grid-template-rows: minmax(40.104166666666664rem, max-content) minmax(11.71875rem, max-content) minmax(4.166666667rem, max-content);
  }
  [id='d16efb7e-b9d9-42ab-b373-c8c74a975dcb'] {
    grid-area: 2/2/3/3;
    font-size: Max(Min(18rem, 12px), 2.34375rem);
  }
}
@media (min-width: 375.05px) and (max-width: 480px) {
  [id='35112b35-7d42-4a65-be71-737e252f4c06'] {
    display: grid;
    grid-template-columns: 28.229166666666668rem 43.541666666666664rem 28.229166666666668rem;
    grid-template-rows: minmax(64.16666666666667rem, max-content) minmax(18.75rem, max-content) minmax(5rem, max-content);
  }
  [id='d16efb7e-b9d9-42ab-b373-c8c74a975dcb'] {
    grid-area: 2/2/3/3;
    font-size: Max(Min(18rem, 12px), 3.75rem);
  }
}
@media (min-width: 0px) and (max-width: 375px) {
  [id='35112b35-7d42-4a65-be71-737e252f4c06'] {
    display: grid;
    grid-template-columns: 6.4rem 87.2rem 6.4rem;
    grid-template-rows: minmax(82.13333333333334rem, max-content) minmax(37.55023923444976rem, max-content) minmax(6.4rem, max-content);
  }
  [id='d16efb7e-b9d9-42ab-b373-c8c74a975dcb'] {
    grid-area: 2/2/3/3;
    font-size: Max(Min(18rem, 12px), 7.510047846889952rem);
  }
}
</style>
