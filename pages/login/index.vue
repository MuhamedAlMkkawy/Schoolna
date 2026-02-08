<template>
  <div class="login_page page">
    <div class="container">
      <!-- <h1>{{ $t('login_page.title') }}</h1> -->
      <div class="image">
        <img src="/assets/images/logo.svg" alt="image" loading="lazy">
      </div>
      <VeeForm
        :validation-schema="loginSchema" 
        @submit="handleSubmit"
        class="login_form"
      >
        <CustomField 
          name="email" 
          type="email" 
          :autofocus="true"
          :label="$t('login_page.email')" 
          :placeholder="$t('login_page.emailPlaceholder')"
        />
        <button class="main-btn">{{ $t('login_page.submit_button') }}</button>
      </VeeForm>
      <div class="language_switch">
        <LanguageSwitch />
      </div>
    </div>
    <Toast :style="{ 'direction': globalStore.lang === 'ar' ? 'rtl' : 'ltr' }" />
  </div>
</template>

<script setup>
  import { useToast } from "primevue/usetoast";
  
  // DEFINE TOAST
  const toast = useToast();

  // DEFIENE GLOBAL STORE
  const globalStore = useGlobalStore()

  // define loginSchema
  const { loginSchema} = useValidationSchemas()


  // DEFINE PAGE META
  definePageMeta({
    layout : false
  })

  // define router 
  const router = useRouter()

  // define localeRoute
  const localeRoute = useLocaleRoute()

  const handleSubmit = (values) => {
    if(values.email == 'manager@mazayasolutions.com'){
      useCookie('isLogged').value = true
      router.push(localeRoute('/'))
    }else{
      toast.add({ 
        severity: 'error', 
        summary: globalStore.lang == 'en' ? 'Error Message' : 'حدث خطأ', 
        detail: globalStore?.lang == 'en' ? 'ُEmail is not Authorized' : "البريد الإلكتروني غير مسموح له بالدخول", 
        life: 3000 
      });
    }
  }
</script>

<style lang="scss" scoped>
  .login_page{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(84deg, #007593 3.25%, #044D60 96.85%);
    color: #fff;
    .container{
      h1{
        font-size: 40px;
        font-weight: 700;
      }
      .image{
        max-width: 300px;
        margin: 0 auto 20px;
      }
      .login_form{
        margin-block-start: 50px;
        max-width: 400px;
        margin: 50px auto 0;
        background: #fff;
        padding: 20px 20px;
        border-radius: 20px;
        color: $mainColor;
        .main-btn{
          max-width: 100%;
          width: 100%;
          margin-block-start: 20px;
        }
      }
      // .language_switch{
      //   // background: #fff;
      //   // color: $mainColor;
      //   // max-width: 200px;
      //   // width: 100%;
      //   // padding: 8px 15px;
      //   // border-radius: 8px;
      //   // font-size: 18px;
      //   // font-weight: 600;
      //   // margin: 100px auto 0;
      //   // text-align: center;
      //   // display: flex;
      //   // justify-content: center;
      //   // .input{
      //   //   width: 100% !important;
      //   //   .languages_switch{
      //   //     width: 100% !important;
      //   //   }
      //   // }
      // }
    }
  }
</style>