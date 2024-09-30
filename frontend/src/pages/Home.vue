<template>
  <div class="max-w-3xl py-12 mx-auto">
    <Card>
      <h1 class="text-2xl font-bold">Home</h1>
      <p class="text-gray-500">Welcome to the home page</p>

      <Button icon-left="code" @click="$resources.ping.fetch" :loading="$resources.ping.loading">
        Click to send 'ping' request
      </Button>
      <div>
        {{ $resources.ping.data }}
      </div>
      <pre>{{ $resources.ping }}</pre>

      <Button @click="showDialog = true">Open Dialog</Button>
      <Button @click="session.logout.submit">Logout</Button>
      <Dialog title="Title" v-model="showDialog"> Dialog content </Dialog>
    </Card>
    <FrappeUI />
  </div>
</template>

<script>
import { Dialog, Card } from 'frappe-ui'
import { session } from '../data/session';

export default {
  name: 'Home',
  data() {
    return {
      showDialog: false,
    }
  },
  resources: {
    ping: {
      url: 'ping',
    },
  },
  components: {
    Dialog,
    Card,
  },
  setup() {
    return { session }
  },
}
</script>
