<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useAuth from '@/composables/useAuth'

const { username, password, login, isLoading, errorMessage } = useAuth()
</script>
<template>
  <div class="flex flex-col gap-6">
    <Card>
      <CardHeader class="text-center">
        <CardTitle class="text-xl">Welcome back</CardTitle>
        <CardDescription>Login with your Apple or Google account</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="login">
          <div class="grid gap-6">
            <div class="flex flex-col gap-4">
              <Button variant="outline" class="w-full">
                <img src="/src/assets/icons/apple.svg" alt="Apple Icon" class="w-4 h-4 mr-2" />
                Login with Apple
              </Button>
              <Button variant="outline" class="w-full">
                <img src="/src/assets/icons/google.svg" alt="Google Icon" class="w-4 h-4 mr-2" />
                Login with Google
              </Button>
            </div>
            <div
              class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"
            >
              <span class="relative z-10 bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
            <div class="grid gap-6">
              <div class="grid gap-2">
                <Label for="username">Account</Label>
                <Input id="username" v-model="username" placeholder="account" required />
              </div>
              <div class="grid gap-2">
                <div class="flex items-center">
                  <Label for="password">Password</Label>
                  <a href="#" class="ml-auto text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" v-model="password" required />
              </div>
              <Button type="submit" class="w-full" :disabled="isLoading"> Login </Button>
            </div>
          </div>
        </form>
        <div v-if="errorMessage" class="text-red-500 text-center mt-4">
          {{ errorMessage }}
        </div>
      </CardContent>
    </Card>
  </div>
</template>
