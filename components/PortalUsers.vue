<template>
  <section class="portal_users_section">
    <SectionHeader 
      headerPosition="center"
      :badgeText="$t('portalsHeader.badgeText')"
      :title="$t('portalsHeader.title')"
      :text="$t('portalsHeader.text')"
    />
    <ul class="container portal_users_content">
      <li class="portal_user image">
        <img src="../assets/images/child_portal.png" alt="image" loading="lazy">
      </li>
      <li class="portal_user image">
        <img src="../assets/images/2.svg" alt="image" loading="lazy">
      </li>
      <li class="portal_user image">
        <img src="../assets/images/parent_portal.png" alt="image" loading="lazy">
        <img src="../assets/images/teacher_cursor.svg" class="teacher_portal_cursor" alt="image" loading="lazy">
      </li>
      <li class="portal_user image">
        <img src="../assets/images/4.svg" alt="image" loading="lazy">
        <img src="../assets/images/parent_cursor.svg" class="parent_portal_cursor" alt="image" loading="lazy">
      </li>
      <li class="portal_user image">
        <img src="../assets/images/parent_portal.png" alt="image" loading="lazy">
      </li>
      <li class="portal_user image">
        <img src="../assets/images/5.svg" alt="image" loading="lazy">
        <img src="../assets/images/student_cursor.svg" class="student_portal_cursor" alt="image" loading="lazy">
      </li>
    </ul>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .portal_users_section{
    background: url('../assets/images/protal_users_background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .portal_users_content{
      position: relative;
      // height: 280px;
      min-height: 200px;
      padding-block: 20px;
      li.portal_user{
        &:nth-of-type(1){
          img{
            right: 22%;
            top: -10%;
          }
        }
        &:nth-of-type(2){
          img{
            right: 15%;
            top: 35%;
          }
        }
        &:nth-of-type(3){
          img{
            right: 28%;
            top: 45%;
          }
        }
        &:nth-of-type(4){
          img{
            left: 28%;
            top: 52%;
          }
        }
        &:nth-of-type(5){
          img{
            left: 15%;
            top: 30%;
          }
        }
        &:nth-of-type(6){
          img{
            left: 22%;
            top: -10%
          }
        }
        @media (max-width : 567px){
          &:nth-of-type(1){
            img{
              right: 12%;
              top: -10%;
            }
          }
          &:nth-of-type(2){
            img{
              right: 5%;
              top: 35%;
            }
          }
          &:nth-of-type(3){
            img{
              right: 18%;
              top: 70%;
            }
          }
          &:nth-of-type(4){
            img{
              left: 18%;
              top: 72%;
            }
          }
          &:nth-of-type(5){
            img{
              left: 5%;
              top: 35%;
            }
          }
          &:nth-of-type(6){
            img{
              left: 12%;
              top: -10%
            }
          }

        }
        img{
          width: 80px;
          height: fit-content;
          position: absolute;
          object-fit: contain;
          &.parent_portal_cursor{
            top: 75%;
            left: 22%;
            @media (max-width : 992px){
              top: 80%;
              left: 20%;
            }
            @media (max-width : 567px){
              top: 100%;
              left: 5%;
            }
          }
          &.teacher_portal_cursor{
            top: 70%;
            right: 22%;
            @media (max-width : 992px){
              top: 72%;
              right: 19%;
            }
            @media (max-width : 567px){
              top: 98%;
              right: 5%;
            }
          }
          &.student_portal_cursor{
            left: 28%;
            top: 15%;
            @media (max-width : 992px){
              left: 31%;
              // top: 20%;
            }
          }
        }
      }
    }
  }
</style>