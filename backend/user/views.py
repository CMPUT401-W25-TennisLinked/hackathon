from django.shortcuts import render

# Create your views here.
def show_profile(request, user_id):
    
    profile = get_object_or_404(Profile, id=user_id)
    notification = Notifs.object.filter(user_id=user_id)

    data = {
        profile {
        "name": profile.name,
        "email": profile.email,
        "phone": profile.phone,
        "city": profile.city,
        "country": profile.country,
        }
        # "notifications": [
        #     {
        #         "id": notif.id,
        #         "message": notif.message,
        #         "read": notif.read,
        #         "timestamp": notif.timestamp
        #     }
        #     for i in notifications
        # ]
    }

    return JsonResponse(data)