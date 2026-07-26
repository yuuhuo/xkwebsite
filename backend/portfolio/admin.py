from django.contrib import admin
from django.contrib.auth.models import Group, User
from django.contrib.auth.admin import GroupAdmin, UserAdmin

from .admin_site import xk_admin_site
from .models import Blog, Gallery, Profile, Project


class ProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "slogan", "email", "github", "updated_time")
    search_fields = ("name", "bio", "slogan", "email", "github", "social")


class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "technology", "date", "updated_time")
    search_fields = ("title", "description", "technology")
    list_filter = ("date",)


class BlogAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "created_time", "updated_time")
    search_fields = ("title", "content")
    list_filter = ("category", "created_time")


class GalleryAdmin(admin.ModelAdmin):
    list_display = ("description", "date", "created_time")
    search_fields = ("description",)
    list_filter = ("date",)


xk_admin_site.register(Profile, ProfileAdmin)
xk_admin_site.register(Project, ProjectAdmin)
xk_admin_site.register(Blog, BlogAdmin)
xk_admin_site.register(Gallery, GalleryAdmin)
xk_admin_site.register(User, UserAdmin)
xk_admin_site.register(Group, GroupAdmin)
