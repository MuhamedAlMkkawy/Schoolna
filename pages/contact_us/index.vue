<template>
  <div class="contact_page page">
    <!-- SCHOOLNA CONTACT SECTION -->
    <section class="schoolna_contact_section">
      <div class="container schoolna_contact_content">
        <div class="contact_us_items">
          <SectionHeader 
            headerPosition="start"
            :badgeText="$t('contact_page.contactSection.badgeText')"
            :title="$t('contact_page.contactSection.title')"
            :text="$t('contact_page.contactSection.text')"
          />
          <ul class="contacts">
            <li>
              <a href="tel:01501234569">
                <div class="image">
                  <img src="../../assets/images/phone_icon.svg" alt="image" loading="lazy">
                </div>
                <div class="contact_info">
                  <h3>{{ $t('contact_page.contactSection.phone') }}</h3>
                  <p>+7 (800) 123 45 69</p>
                </div>
              </a>
            </li>
            <li>
              <a href="mailto:someone@something.com">
                <div class="image">
                  <img src="../../assets/images/mail_icon.svg" alt="image" loading="lazy">
                </div>
                <div class="contact_info">
                  <h3>{{ $t('contact_page.contactSection.email') }}</h3>
                  <p>someone@something.com</p>
                </div>
              </a>
            </li>
            <li>
              <div class="image">
                <img src="../../assets/images/location_icon.svg" alt="image" loading="lazy">
              </div>
              <div class="contact_info">
                <h3>{{ $t('contact_page.contactSection.address') }}</h3>
                <p>PO Box 97845 Baker st. 567, Los Angeles, California, US.</p>
              </div>
            </li>
          </ul>
        </div>
        <VeeForm 
          :validation-schema="contactSchema" 
          @submit="handleSubmit"
          class="contact_us_form">
          <h3>{{ $t('contact_page.form.title') }}</h3>
          <div class="flex_inputs">
            <!-- FULL NAME -->
            <div class="input">
              <label :for="$t('contact_page.form.fullName')">{{ $t('contact_page.form.fullName') }}</label>
              <CustomField 
                name="fullName" 
                type="text" 
                :placeholder="$t('contact_page.form.fullNamePlaceholder')" 
                @updateInputField="body.name = $event"
              />
            </div>
            <!-- SUBJECT -->
            <div class="input">
              <label :for="$t('contact_page.form.subject')">{{ $t('contact_page.form.subject') }}</label>
              <CustomField 
                name="subject" 
                type="text" 
                :placeholder="$t('contact_page.form.subjectPlaceholder')" 
                @updateInputField="body.subject = $event"
              />
            </div>
          </div>
          <div class="flex_inputs">
            <!-- PHONE -->
            <div class="input">
              <label :for="$t('contact_page.form.phone')">{{ $t('contact_page.form.phone') }}</label>
              <CustomField 
                name="phone" 
                type="tel" 
                :placeholder="$t('contact_page.form.phonePlaceholder')" 
                @updateInputField="body.phone = $event"
              />
            </div>
            <!-- EMAIL -->
            <div class="input">
              <label :for="$t('contact_page.form.email')">{{ $t('contact_page.form.email') }}</label>
              <CustomField 
                name="email" 
                type="email" 
                :placeholder="$t('contact_page.form.emailPlaceholder')" 
                @updateInputField="body.email = $event"
              />
            </div>
          </div>
          <label :for="$t('contact_page.form.message')">{{ $t('contact_page.form.message') }}</label>
          <div class="input-wrap">
            <textarea name="message" id="message"></textarea>
          </div>
          <button class="main-btn">
            {{ $t('contact_page.form.button') }}
          </button>
        </VeeForm>
      </div>
    </section>
    <!-- SCHOOLNA CONTACT SECTION -->
    <!-- SCHOOLNA CLIENTS SECTION -->
    <Clients />
    <!-- SCHOOLNA CLIENTS SECTION -->
    <!-- SCHOOLNA HERO SECTION -->
    <SchoolnaHero 
      :title="$t('contact_page.heroSection.title')"
      :text="$t('contact_page.heroSection.text')"
      :buttons="[
        {
          title : $t('contact_page.heroSection.demoButton')
        },
        {
          title : $t('contact_page.heroSection.trialButton'),
          isReversed : true
        }
      ]"
    />
    <!-- SCHOOLNA HERO SECTION -->
    <!-- SCHOOLNA FAQ SECTION -->
    <Faq />
    <!-- SCHOOLNA FAQ SECTION -->
  </div>
</template>

<script setup>
  const { contactSchema } = useValidationSchemas()


  // define body
  const body = ref({
    name : '',
    subject : '',
    phone : '',
    email : '',
    message : ''
  })

  const handleSubmit = () => {
    console.log(body.value)
  }

</script>

<style lang="scss" scoped>
  .schoolna_contact_section{
    .schoolna_contact_content{
      @include displayFlex($justify : space-between , $align : flex-start);
      .contact_us_items{
        width: 50%;
        ul.contacts{
          margin-top: 30px;
          li,
          a{
            @include displayFlex($justify :flex-start , $align : flex-start , $gap : 16px);
            .image{
              width: 50px;
              height: 50px;
              border-radius: 8px;
              padding: 12px;
              img{
                object-fit: contain;
              }
            }
            .contact_info{
              h3{
                font-size: 14px;
                font-weight: 400;
                color: #6D6C80;
                // margin-bottom: 17px;
              }
              p{
                font-size: 18px;
                font-weight: 500;
              }
            }
            &:nth-of-type(1){
              .image{
                background: #F4EFFF;
              }
            }
            &:nth-of-type(2){
              .image{
                background: #F5FAE7; 
              }
            }
            &:nth-of-type(3){
              .image{
                background: #FDEFEE;
              }
            }
            &:not(:last-of-type){
              margin-bottom: 16px;
            }
          }
        }
      }


      .contact_us_form{
        border-radius: 14px;
        background: #FFF;
        box-shadow: 0 5px 16px 0 rgba(8, 15, 52, 0.06);
        padding: 32px clamp(14px , 2.5vw , 32px);
        flex-grow: 1;
        h3{
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        button.main-btn{
          width: 100%;
        }
      }

      @media (max-width : 767px){
        flex-wrap: wrap;
        .contact_us_items{
          width: 100%;
        }
      }
    }
  }
</style>