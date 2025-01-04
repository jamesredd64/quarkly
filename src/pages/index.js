import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Input, Button, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Section padding="88px 0 88px 0" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1725830826396-bcb0585da085?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/cover repeat scroll padding-box" quarkly-title="Form-5" height="500px">
			<Override
				slot="SectionContent"
				flex-wrap="wrap"
				lg-justify-content="center"
				max-width="1220px"
				flex-direction="row"
				align-content="flex-start"
				display="grid"
			/>
			<Box
				width="50%"
				padding="0px 15px 0px 15px"
				lg-width="100%"
				md-width="100%"
				min-height="0px"
			/>
			<Box
				border-radius="24px"
				sm-padding="28px 30px 28px 30px"
				width="50%"
				lg-width="100%"
				lg-max-width="480px"
				padding="40px 48px 48px 48px"
				background="#ffffff"
				position="absolute"
				display="block"
			>
				<Text
					margin="0px 0px 8px 0px"
					font="--headline2"
					color="--dark"
					text-align="left"
					sm-font="--headline2"
					sm-text-align="center"
				>
					Login
				</Text>
				<Text
					margin="0px 0px 24px 0px"
					font="--lead"
					color="--grey"
					text-align="left"
					sm-font="--base"
					sm-margin="0px 0px 12px 0px"
					sm-text-align="center"
				>
					please login.
				</Text>
				<Components.QuarklycommunityKitNetlifyForm width="100%">
					<Text font="normal 400 20px/1.5 --fontFamily-googleRoboto" color="--darkL2" sm-margin="0px 0px 8px 0px" margin="0px 0px 16px 0px">
						E-mail
					</Text>
					<Input
						padding="10px 16px 10px 16px"
						type="text"
						border-width="2px"
						width="100%"
						border-style="solid"
						name="Name"
						margin="0px 0px 24px 0px"
						sm-margin="0px 0px 14px 0px"
						border-radius="4px"
						border-color="--color-lightD2"
					/>
					<Text color="--darkL2" sm-margin="0px 0px 8px 0px" margin="0px 0px 16px 0px" font="normal 400 20px/1.5 --fontFamily-googleRoboto">
						Password
					</Text>
					<Input
						border-width="2px"
						name="Email"
						type="email"
						margin="0px 0px 24px 0px"
						sm-margin="0px 0px 14px 0px"
						border-radius="4px"
						border-color="--color-lightD2"
						border-style="solid"
						width="100%"
						padding="10px 16px 10px 16px"
					/>
					<Box display="flex" justify-content="flex-end">
						<Button
							font="normal 400 20px/1.5 --fontFamily-googleRoboto"
							border-radius="24px"
							padding="9px 82px 9px 81px"
							hover-background="#005bcc"
							transition="background-color 0.1s ease 0s"
						>
							Send
						</Button>
					</Box>
				</Components.QuarklycommunityKitNetlifyForm>
			</Box>
		</Section>
		<Image
			md-top="300px"
			lg-top="0px"
			src="https://uploads.quarkly.io/6123949e957019001e284458/images/backgroung-hero.svg?v=2021-09-21T22:07:12.314Z"
			position="absolute"
			right="0px"
			bottom="auto"
			top="130px"
			z-index="1"
			lg-right="-200px"
			md-width="600px"
		/>
		<Section padding="88px 0 88px 0" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1729006076780-ad0b5313b61e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/cover repeat scroll padding-box" quarkly-title="Form-5">
			<Override
				slot="SectionContent"
				flex-wrap="wrap"
				lg-justify-content="center"
				max-width="1220px"
				flex-direction="row"
				align-content="flex-start"
			/>
			<Box
				width="50%"
				padding="0px 15px 0px 15px"
				lg-width="100%"
				md-width="100%"
				min-height="0px"
			/>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});