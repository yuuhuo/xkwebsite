from django.contrib.admin import AdminSite
from django.contrib.admin.models import LogEntry
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group

from .models import Blog, Gallery, Profile, Project


class XkAdminSite(AdminSite):
    site_header = "XK CMS"
    site_title = "X.K Admin"
    index_title = "Dashboard"
    index_template = "admin/index.html"

    def index(self, request, extra_context=None):
        extra_context = extra_context or {}
        extra_context.update(
            {
                "dashboard_stats": [
                    {
                        "label": "Project",
                        "value": Project.objects.count(),
                        "tone": "blue",
                    },
                    {
                        "label": "Blog",
                        "value": Blog.objects.count(),
                        "tone": "green",
                    },
                    {
                        "label": "Gallery",
                        "value": Gallery.objects.count(),
                        "tone": "violet",
                    },
                    {
                        "label": "访问量",
                        "value": "0",
                        "tone": "amber",
                    },
                ],
                "recent_admin_actions": LogEntry.objects.select_related(
                    "content_type", "user"
                )[:8],
                "system_stats": {
                    "profiles": Profile.objects.count(),
                    "users": get_user_model().objects.count(),
                    "groups": Group.objects.count(),
                },
            }
        )
        return super().index(request, extra_context=extra_context)


xk_admin_site = XkAdminSite(name="admin")
