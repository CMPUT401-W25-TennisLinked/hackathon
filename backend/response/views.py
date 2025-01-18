from django.shortcuts import render

def view_response(request, application_id):
    responses = Responses.object.filter(application_id=application_id).order_by('date')
    serializer = ResponsesSerializer(response, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


def add_response(request, application_id):
    data = request.data
    data['job_application'] = application_id
    serializer = ResponsesSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTPS_201_CREATED)
    return Response(serializer.errors, status=status.HTTPS_400_BAD_REQUEST)

def edit_response(request, response_id):
    response = get_object_or_404(Responses, id=response_id)
    serializer = ResponsesSerializer(response, data=request.data, partial=(request.method == 'PATCH'))
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def delete_response(request, response_id):
    response = get_object_or_404(Responses, id=response_id)
    response.delete()
    return Response({"message": "Response deleted successfully"}, status=status.HTTP_204_NO_CONTENT)




