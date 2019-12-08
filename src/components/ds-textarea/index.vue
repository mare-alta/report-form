<template>
  <textarea
    @input="$emit('input', $event.target.value)"
    rows="4"
    style="
      margin-top: 8px;
      padding: 4px;
      width: 100%;
      resize: vertical;
      border-radius: 4px;
      font-size: 16px;
    "
  />
</template>
