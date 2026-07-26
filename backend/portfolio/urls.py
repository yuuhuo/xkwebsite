from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import BlogViewSet, GalleryViewSet, ProfileViewSet, ProjectViewSet

router = DefaultRouter()
router.register("profile", ProfileViewSet, basename="profile")
router.register("projects", ProjectViewSet, basename="project")
router.register("blogs", BlogViewSet, basename="blog")
router.register("gallery", GalleryViewSet, basename="gallery")

urlpatterns = [
    path("", include(router.urls)),
]
