from rest_framework import serializers, viewsets

from vemo_service_apps.catalogo.models.motor import Motor


class MotorSerializer(serializers.ModelSerializer):

    # motor_nombre = serializers.ReadOnlyField(
    #     source='motor.marca')

    class Meta:

        fields = '__all__'
        model = Motor


class MotorViewSet(viewsets.ModelViewSet):
    queryset = Motor.objects.all()
    serializer_class = MotorSerializer
