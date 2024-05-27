<template>
  <main class="p-4">
    <h2 class="text-2xl text-gray-500 font-semibold mb-2">Contact Us</h2>
    <div class="text-sm text-gray-600 mb-6">
      <p>
        Ready to transform your business with custom React applications? Contact
        us today to discuss your project.
      </p>
    </div>
    <form id="contact_form">
      <div class="flex mb-5">
        <div class="w-1/2 mr-2">
          <label for="first_name_field" class="block text-sm text-gray-500"
            >First Name:</label
          >
          <input
            class="rounded border-gray-400 w-full"
            type="text"
            name="first_name"
            id="first_name_field"
          />
        </div>
        <div class="w-1/2">
          <label for="last_name_field" class="block text-sm text-gray-500"
            >Last Name:</label
          >
          <input
            class="rounded border-gray-400 w-full"
            type="text"
            name="last_name"
            id="last_name_field"
          />
        </div>
      </div>
      <div class="flex mb-5">
        <div class="w-1/2 mr-2">
          <label for="email_field" class="block text-sm text-gray-500"
            >Email:</label
          >
          <input
            class="rounded border-gray-400 w-full"
            type="email"
            name="email"
            id="email_field"
          />
        </div>
        <div class="w-1/2">
          <label for="phone_field" class="block text-sm text-gray-500"
            >Phone:</label
          >
          <input
            class="rounded border-gray-400 w-full"
            type="tel"
            name="phone"
            id="phone_field"
          />
        </div>
      </div>

      <div class="mb-4">
        <label for="message_field" class="block text-sm text-gray-500"
          >Message:</label
        >
        <textarea
          class="w-full rounded border-gray-400"
          name="message"
          id="message_field"
          rows="6"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200 hover:text-white hover:bg-blue-800"
      >
        Send
      </button>
    </form>
  </main>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style>
form {
}
</style>
