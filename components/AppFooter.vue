<template>
  <div class="footer_sections">
    <!-- SUBSCRIBE -->
    <section class="subscribe_section">
      <img src="/assets/images/subscribe_flower.svg" alt="image" loading="lazy" class="subscribe_flower" />
      <img src="/assets/images/subscribe_blue_star.svg" alt="image" loading="lazy" class="subscribe_blue_star" />
      <img src="/assets/images/subscribe_orange_star.svg" alt="image" loading="lazy" class="subscribe_orange_star" />
      <img src="/assets/images/subscribe_red_star.svg" alt="image" loading="lazy" class="subscribe_red_star" />
      <div class="container subscribe_section_content">
        <SectionHeader
          headerPosition="center"
          :badgeText="$t('footer.subscribe.badgeText')"
          :title="$t('footer.subscribe.title')"
          :text="$t('footer.subscribe.text')"
        />
        <VeeForm
          :validation-schema="subscribeSchema"
          class="form"
          @submit="handleSubmit"
          v-slot="{ meta }"
        >
          <CustomField
            name="email"
            type="text"
            :placeholder="$t('footer.subscribe.placeholder')"
            @updateInputField="body.email = $event"
          />
          <button class="main-btn">
            {{ $t('footer.subscribe.button') }}
          </button>
        </VeeForm>
      </div>
    </section>
    <!-- SUBSCRIBE -->

    <!-- FOOTER -->
    <footer class="footer_content">
      <div class="container footer_section_content">
        <!-- Logo and Description -->
        <div class="footer_item">
          <div class="image">
            <img src="/assets/images/logo.svg" alt="logo" loading="lazy" />
          </div>
          <div class="text">
            {{ $t('footer.main.description') }}
          </div>
          <ul class="social_links">
            <li><NuxtLink to=""><i class="pi pi-facebook"></i></NuxtLink></li>
            <li><NuxtLink to=""><i class="pi pi-instagram"></i></NuxtLink></li>
            <li><NuxtLink to=""><i class="pi pi-telegram"></i></NuxtLink></li>
            <li><NuxtLink to=""><i class="pi pi-youtube"></i></NuxtLink></li>
            <li><NuxtLink to=""><i class="pi pi-linkedin"></i></NuxtLink></li>
          </ul>
        </div>

        <!-- Pages Section -->
        <div class="footer_item">
          <h4>{{ $t('footer.navigation.pages.title') }}</h4>
          <ol class="footer_links">
            <li><NuxtLink :to="$localeRoute('/about')">{{ $t('footer.navigation.pages.about') }}</NuxtLink></li>
            <li><NuxtLink >{{ $t('footer.navigation.pages.gallery') }}</NuxtLink></li>
            <li><NuxtLink >{{ $t('footer.navigation.pages.events') }}</NuxtLink></li>
          </ol>
        </div>

        <!-- Help Section -->
        <div class="footer_item">
          <h4>{{ $t('footer.navigation.help.title') }}</h4>
          <ol class="footer_links">
            <li><NuxtLink >{{ $t('footer.navigation.help.faq') }}</NuxtLink></li>
            <li><NuxtLink >{{ $t('footer.navigation.help.pricing') }}</NuxtLink></li>
            <li><NuxtLink >{{ $t('footer.navigation.help.blogs') }}</NuxtLink></li>
          </ol>
        </div>

        <!-- Legal Section -->
        <div class="footer_item">
          <h4>{{ $t('footer.navigation.legal.title') }}</h4>
          <ol class="footer_links">
            <li><NuxtLink :to="$localeRoute('/privacy_policy')">{{ $t('footer.navigation.legal.privacyPolicy') }}</NuxtLink></li>
            <li><NuxtLink >{{ $t('footer.navigation.legal.termsOfService') }}</NuxtLink></li>
            <li><NuxtLink :to="$localeRoute('/terms_of_use')">{{ $t('footer.navigation.legal.termsOfUse') }}</NuxtLink></li>
          </ol>
        </div>
      </div>
    </footer>
    <!-- FOOTER -->

    <!-- COPYRIGHT -->
    <div class="copyright">
      <div class="container copyright_section_content">
        <p>{{ $t('footer.copyright.text') }}</p>
        <div class="copyrght_links">
          <NuxtLink to="">{{ $t('footer.copyright.privacyPolicy') }}</NuxtLink>
          <NuxtLink to="">{{ $t('footer.copyright.cookiesPolicy') }}</NuxtLink>
        </div>
      </div>
    </div>
    <!-- COPYRIGHT -->
  </div>
</template>

<script setup>
  const { subscribeSchema } = useValidationSchemas()


  // define body
  const body = ref({
    email : ''
  })

  // define handle submit
  const handleSubmit = () => {
    console.log(body.value)
  }
</script>

<style lang="scss" scoped>
  .footer_sections{
    .subscribe_section{
      background: rgba($mainColorRgb , 0.1);
      padding-bottom: 150px;
      position: relative;
      img{
        width: 40px;
        position: absolute;
        object-fit: contain ;
        height: fit-content;
        z-index: -1;
        &.subscribe_flower{
          top: 20%;
          width: 60px;
          inset-inline-start: 18%;
          @media (max-width : 767px){
            top: 10%;
          }
        }
        &.subscribe_blue_star{
          top: 30%;
          inset-inline-end: 18%;
          width: 50px;
          @media (max-width : 767px){
            top: 10%;
          }
        }
        &.subscribe_orange_star{
          top: 25%;
          inset-inline-end: 12%;
          width: 30px;
          @media (max-width : 767px){
            top: 60%;
          }
        }
        &.subscribe_red_star{
          top: 63%;
          inset-inline-start: 28%;
          width: 20px;
        }
        @media (max-width : 450px){
          display: none;
        }
      }
      .form{
        max-width: 555px;
        margin: 20px auto 50px;
        display: flex;
        align-items: flex-start;
        width: 100%;
        border-radius: 16px;
        position: relative;
        background: #fff;
        .input-wrap{
          border: transparent;
          margin-bottom: 0;
          padding-block: 10px;
          max-width:440px;
          width: 100%;
        }
        button.main-btn{
          position: absolute;
          inset-inline-end: 5px;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(279deg, #1D5166 -6.86%, #28B6BE 95.79%);
        }
      }
      @media (max-width : 767px){
        padding-bottom: 200px;
      }
    }

    .footer_content{
      background-repeat: no-repeat;
      position: relative;
      z-index: 3;
      padding-block: 20px 35px;
      color: #fff;
      &::after{
        content: "";
        background: url("../assets/images/footer_background.png");
        background-size: cover;
        // background-position: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: -80%;
        left: 0;
        z-index: -1;
        @media (max-width : 767px){
          top: -185px;
        }
      }
      &::before{
        content: '';
        position: absolute;
        inset-inline-start: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: #1D5166;
      }
      .footer_section_content{
        @include displayFlex($justify : space-between , $align : flex-start);
        @media (max-width : 767px){
          flex-wrap: wrap;
          gap: 20px 40px;
          .footer_item{
            width: 45%;
          }
        }
      }
      .footer_item{
        .image{
          width: 220px;
          margin-bottom: 24px;
        }
        .text{
          @include textTruncate(3);
        }
        .social_links{
          @include displayFlex($justify : flex-start);
          margin-top: 24px;
          li{
            a{
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: #fff;
              color: #1D5166;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .footer_links{
          @include displayFlex($direction : column , $gap : 8px , $align:flex-start);
          margin-top: 16px;
          li{
            position: relative;
            padding-block: 1px;
            &::after,
            &::before{
              content: '';
              position: absolute;
              width: 0;
              height: 1px;
              background: #fff;
              transition: 0.3s;
            }
            &::after{
              top: 0;
              inset-inline-start: 0;
            }
            &::before{
              bottom: 0;
              inset-inline-end: 0;
            }
            &:hover{
              &::after , &::before{
                width: 100%;
              }
            }
          }
        }
        &:first-of-type{
          width: 387px;
        }
        @media (max-width : 767px){
          &:first-of-type{
            flex-grow: 1;
          }
          &:not(:first-of-type){
            width: 25%;
          }
        }
        @media (max-width : 567px){
          width: 50% !important;
          &:not(:last-of-type){
            padding-bottom: 30px;
            border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
          }
        }
      }
    }

    .copyright{
      background: #1D5166;
      color: #fff;
      font-size: 14px;
      .copyright_section_content{
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding-block: 15px  ;
        @include displayFlex($justify : space-between);
        p{
          font-weight: 300;
        }
        .copyrght_links{
          display: flex;
          gap: 20px;
          a{
            font-weight: 500;
            position: relative;
            &:first-of-type{
              &::after{
                content: '';
                position: absolute;
                inset-inline-end: -10px;
                width: 1px;
                height: 100%;
                background: rgba(255, 255, 255, 0.2);
              }
            }
          }
        }
        @media (max-width : 567px){
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    }
  }
</style>