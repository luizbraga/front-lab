from django.contrib import admin

from .models import Post


class PostAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'created_at')
    list_display = [
        'id',
        'title',
        'created_at'
    ]
    list_filter = ['created_at']
    search_fields = [
        'id',
        'title',
    ]

admin.site.register(Post, PostAdmin)
