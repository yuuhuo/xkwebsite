from rest_framework.permissions import SAFE_METHODS, BasePermission


class IsAdminOrReadOnly(BasePermission):
    """
    Guests can read public content. Admin users can create, update, and delete it.
    """

    def has_permission(self, request, view) -> bool:
        if request.method in SAFE_METHODS:
            return True

        return bool(request.user and request.user.is_staff)
