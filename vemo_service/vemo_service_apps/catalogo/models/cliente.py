from uuid import uuid4
from django.db import models

# Create your models here.


class Cliente(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    nombre = models.CharField(max_length=60)
    codigo = models.CharField(max_length=15, null=True, blank=True)
    estado = models.BooleanField(default=True)

    class Meta:
        verbose_name = "cliente"
        verbose_name_plural = "cliente"
        permissions = (
            ('list_cliente', 'Can list cliente'),
            ('get_cliente', 'Can get cliente'),
        )

    def __str__(self):
        return self.nombre
