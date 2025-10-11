import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactSection14() {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Contacto
        </Typography>
        <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-4xl"
        >
            Conversemos sobre tu próximo proyecto
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
        Estoy buscando activamente nuevos proyectos y oportunidades para aportar valor.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 justify-items-center lg:grid-cols-2 items-start">
            <animated-icons
                src="https://animatedicons.co/get-icon?name=Hey&style=minimalistic&token=a91f6990-968c-4b27-8d19-1e6965a394aa"
                trigger="loop-on-hover"
                attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":1,"defaultColours":{"group-1":"#6421F1FF","group-2":"#000000FF","background":"#FFFFFF"}}'
                height="200"
                width="200"
            > 
            </animated-icons>
            <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
            >
            <Typography
              variant="small"
              className="text-left !font-semibold !text-gray-600"
            >
              Motivo de contacto
            </Typography>
            <div className="flex gap-4">
              <Button variant="filled" className="max-w-fit">
                Consulta por proyecto
              </Button>
              <Button variant="filled" className="max-w-fit">
                Oportunidad laboral
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Nombre
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Nombre"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Apellido
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Apellido"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="tu@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Tu mensaje
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Hola liobarrozo, te contacto porque vi tu portfolio y me gustaría..."
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full" color="gray">
              Enviar
            </Button>
            </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection14;