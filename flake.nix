{
  description = "my site";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        ruby = pkgs.ruby_3_4;
        gems = pkgs.bundlerEnv {
          name = "my site";
          inherit ruby;
          gemdir = ./.;
        };
      in
      {
        packages.default = pkgs.writeScriptBin "serve" ''
          #!/bin/sh
          ${pkgs.bundix}/bin/bundix --magic
          ${pkgs.typescript}/bin/tsc --watch &
          ${gems}/bin/bundle exec jekyll serve --drafts &
          wait
        '';
        apps.default = {
          type = "app";
          program = "${self.packages.${system}.default}/bin/serve";
        };
        devShells.default = pkgs.mkShell {
          packages = [
            gems
            ruby
            pkgs.typescript
            pkgs.typst
          ];
        };
      }
    );
}
