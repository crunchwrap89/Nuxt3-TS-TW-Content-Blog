<script setup lang="ts">
import FbIcon from "../icons/FbIcon.vue";
import GithubIcon from "../icons/GithubIcon.vue";
import LinkedIcon from "../icons/LinkedIcon.vue";
import MailIcon from "../icons/MailIcon.vue";
</script>
<template>
  <footer class="bg-secondary dark:bg-dsecondary dark:text-white sm:h-72">
    <div class="ml-auto mr-auto flex h-full max-w-screen-xl py-10">
      <div class="flex w-full flex-col sm:h-2/3 sm:flex-row">
        <div
          class="flex flex-col justify-center text-center sm:w-1/3 sm:p-5 sm:text-left"
        >
          <span class="underline underline-offset-4">© 2022</span>
          <h2 class="tracking-wider">marcusn.dev</h2>
          <a
            href="mailto:marcus.nilsson@wintergarde.se"
            class="text-lg underline underline-offset-4"
            >marcus.nilsson@wintergarde.se</a
          >
        </div>
        <div class="flex justify-center p-5 text-center sm:w-1/3">
          <ul class="flex flex-col justify-center sm:flex-row">
            <li class="sm:m-auto sm:ml-5 sm:mr-5">
              <NuxtLink to="/">Home </NuxtLink>
            </li>
            <li class=" pt-2 sm:pt-0 sm:m-auto sm:ml-5 sm:mr-5">
              <NuxtLink to="/articles">Articles </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-center p-5 text-right sm:w-1/3">
          <ul class="flex flex-row justify-center sm:justify-end">
            <li class="m-auto ml-0 mr-6 sm:ml-6">
              <a href="https://www.facebook.com/marcus.nilsson.50159/" aria-label="Visit my facebook page.">
                <FbIcon class="mb-6"
              /></a>
              <a href="https://github.com/crunchwrap89" aria-label="Visit my github"><GithubIcon /></a>
            </li>
            <li class="m-auto ml-0 mr-0 sm:ml-6">
              <a href="https://www.linkedin.com/in/marcus-nilsson-a81874228"
              aria-label="Visit my linked in"><LinkedIcon class="mb-6"
              /></a>
              <a href="mailto:marcus.nilsson@wintergarde.se" aria-label="send me an email"> <MailIcon /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
