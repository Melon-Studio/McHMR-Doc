---
page: true
title: Meet the Team
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/57002549?v=4',
    name: 'Gabriel Ryder',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/6get-xiaofan' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/166266777?v=4',
    name: 'fusheng357',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/fusheng357' }
    ]
  }
]
</script>

# 认识团队

<VPTeamMembers size="small" :members="members" />
