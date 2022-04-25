import { useForm } from "react-hook-form"
import useMutation from "../../hooks/useMutation"
import creator from "../../services/creator"
import AccentButton from "./AccentButton"
import SectionHeader from "./SectionHeader"
import TextAreaField from "./TextAreaField"
import TextInputField from "./TextInputField"
import ErrorComponent from "./ErrorComponent"

const SupportSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { 
    requestOk, 
    isSubmitting, 
    requestError, 
    sendMutation 
  } = useMutation('/api/v1/users/support-email', creator)
  
  const onSubmit = (data) => {
    sendMutation(data)
  }

  return (
    <div className="lg:flex flex-col p-4 h-screen overflow-hidden overflow-y-auto">
      <SectionHeader title="Soporte" />
      {
        requestOk ? (
          <div className="mt-4">
            <h1 className="text-center text-customGrey break-words">
              ¡ Gracias por enviarnos tu reporte !
            </h1>
            <h1 className="text-center text-customGrey font-semibold break-words">
              Lo revisaremos lo más pronto posible
            </h1>
          </div>
        ) : (
          <div className="flex-1 lg:flex flex-col mt-4 mx-auto space-y-2 lg:w-1/2">
            <h1 className="text-center text-customGrey break-words">
              ¿ Tienes problemas con la aplicación o encontraste algún error ?
            </h1>
            <h1 className="text-center text-customGrey font-semibold break-words">
              ! Envía un reporte ¡
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-2"
            >
              <TextInputField
                title="Título"
                maxLength="100"
                placeholder="Escribe un título"
                error={errors.title?.message}
                disabled={isSubmitting}
                {...register('title', {
                  required: {
                    value: true,
                    message: "Debes completar este campo" 
                  }
                })}
              />
              <TextAreaField
                title="Descripción"
                maxLength="560"
                rows="15"
                placeholder="Describe tu problema"
                error={errors.description?.message}
                disabled={isSubmitting}
                {...register('description', {
                  required: {
                    value: true,
                    message: "Debes completar este campo" 
                  }
                })}
              />
              <AccentButton
                className="py-1"
                text={isSubmitting ? "Cargando..." : "Enviar reporte"}
                disabled={isSubmitting}
              />
            </form>
            { requestError && 
              <ErrorComponent error={requestError}>
                <h1 className="text-customGrey text-center mt-4">
                Ocurrió un error al intentar enviar el reporte, intentelo más tarde
                </h1>
              </ErrorComponent> 
            }
          </div>
        )
      }
    </div>
  )
}

export default SupportSection