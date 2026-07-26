from rest_framework import serializers

from .models import Blog, Gallery, Profile, Project


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "id",
            "name",
            "avatar",
            "bio",
            "slogan",
            "email",
            "github",
            "social",
            "owner",
            "updated_time",
        ]
        read_only_fields = ["id", "owner", "updated_time"]


class ProjectSerializer(serializers.ModelSerializer):
    technology_list = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "cover",
            "description",
            "technology",
            "technology_list",
            "github",
            "date",
            "created_time",
            "updated_time",
        ]
        read_only_fields = ["id", "technology_list", "created_time", "updated_time"]

    def get_technology_list(self, obj: Project) -> list[str]:
        return [item.strip() for item in obj.technology.split(",") if item.strip()]


class BlogSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source="get_category_display", read_only=True)

    class Meta:
        model = Blog
        fields = [
            "id",
            "title",
            "content",
            "category",
            "category_display",
            "created_time",
            "updated_time",
        ]
        read_only_fields = ["id", "category_display", "created_time", "updated_time"]


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = [
            "id",
            "image",
            "description",
            "date",
            "created_time",
        ]
        read_only_fields = ["id", "created_time"]
